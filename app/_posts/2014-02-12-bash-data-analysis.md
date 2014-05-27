---
layout: post
title:  "BASH data analysis"
---

In the previous post we've gotten ourselves a data stream using PhantomJS. Let's dive in and parse the result:

To begin with, let's put this malformed html through tidy. Since we're not interested in the many warnings tidy will give us, we'll redirect stderr to /dev/null, yielding us:

{% highlight bash %}
tidy <fetched 2>/dev/null
{% endhighlight %}

<!--more-->

{% highlight html %}
 \n\t\t\t\t</pre>
<div class="\&quot;clear\&quot;"></div>
<pre>\n\t\t</pre>
<div>\n\t\t\t<label>Current mailbox size</label>\n\t\t\t1921
MB\n\t\t</div>
<pre>\n\t\t</pre>
<div>\n\t\t\t<label>Warning quota</label>\n\t\t\t2250
MB\n\t\t</div>
<pre>\n\t\t</pre>
<div>\n\t\t\t<label>Block send quota</label>\n\t\t\t2375
{% endhighlight %}

Since, as mentioned before, all interesting fields contain a 'label' tag, let's grep for those:

{% highlight bash %}
tidy <fetched 2>/dev/null | grep label</pre>
{% endhighlight %}

{% highlight html %}
<div>\n\t\t\t<label><label>Email
</label></label>
<div>\n\t\t\t<label>Email aliases</label>\n\t\t\t
<div>\n\t\t\t<label>Current mailbox size</label>\n\t\t\t1921
<div>\n\t\t\t<label>Warning quota</label>\n\t\t\t2250
<div>\n\t\t\t<label>Block send quota</label>\n\t\t\t2375
<div>\n\t\t\t<label>Block send and receive
quota</label>\n\t\t\t2500 MB\n\t\t</div>
<div>\n\t\t\t<label>Pop enabled</label>\n\t\t\t<img alt="" src="<br" />
{% endhighlight %}

Okay, this is starting to look like something. Let's trim away everything before the closing label tags, and remove the \n and \t characters.

{% highlight bash %}
tidy <first-fetch 2>/dev/null | grep label | sed 's/^.*\/label>//' | sed 's/\\nt//g'
{% endhighlight %}

{% highlight html %}
<div><label><label>Exchange
</label></label>
<div><label>SMTP
1921
2250
2375
2500 MB</label></div>
<label><label>
<img alt="" src="<br" /><img alt="" src="<br" />...
{% endhighlight %}

Let's filter out some of the uninteresting lines to get:

{% highlight bash %}
tidy <first-fetch 2>/dev/null | grep label | sed 's/^.*\/label>//' | sed 's/\\nt//g'
  | grep -v 'label\|img\|<br>\|HOSTED'
{% endhighlight %}

{% highlight html %}
Sunil Prakash
Sunil Prakash
Bob</pre>
</div>
Alice</div>
1921
2250
2375
2500 MB
{% endhighlight %}

Removing the trailing div and MB's we finally have sanitised data:

{% highlight bash %}
tidy <first-fetch 2>/dev/null | grep label | sed 's/^.*\/label>//' | sed 's/\\nt//g'
  | grep -v 'label\|img\|<br>\|HOSTED' | sed 's/<.*//' | sed 's/ MB$//'
{% endhighlight %}

{% highlight html %}
Sunil Prakash
Sunil Prakash
Bob
Alice
1921
2250
2375
2500
{% endhighlight %}

Which well put in a file called 'data'. Pasting these lines together in sets of eight, separated by comma's and with the empty fields padded with a period, we get:

{% highlight bash %}
cat data | paste -d , - - - - - - - - | sed 's/,,/,.,/' | head -n 2
{% endhighlight %}

{% highlight html %}
Bob,REDACTED,REDACTED,REDACTED,1921,2250,2375,2500
Alice,REDACTED,REDACTED,REDACTED,40,2250,2375,2500
{% endhighlight %}

Piping this through awk, setting the field delimeter to comma and calculating the last field divided by the fourth results in:

{% highlight bash %}
cat data | paste -d , - - - - - - - - | sed 's/,,/,.,/' |
  awk -F, '{print $0 "," $5/$8*100"%" }' | head -n 2
{% endhighlight %}

{% highlight html %}
Bob,REDACTED,REDACTED,REDACTED,1921,2250,2375,2500,76.84%
Alice,REDACTED,REDACTED,REDACTED,40,2250,2375,2500,1.6%
{% endhighlight %}

Finally it's time to sort by the last comma separated field, the utilisation percentage, in reverse numerical order:

{% highlight bash %}
cat data | paste -d , - - - - - - - - | sed 's/,,/,.,/'
  | awk -F, '{print $0 "," $5/$8*100"" }' | sort -t, -k +9 -n -r | tail -2
{% endhighlight %}

{% highlight html %}
Bob,REDACTED,REDACTED,REDACTED,0,2250,2375,2500,0
Alice,REDACTED,REDACTED,REDACTED,0,225,237,250,0
{% endhighlight %}

And we already find two empty mailboxes, which at the very least could be downgraded to the cheapest package! To make things more readable, let's lay them out in a nice column

{% highlight bash %}
cat data | paste -d , - - - - - - - - | sed 's/,,/,.,/'
  | awk -F, '{print $0 "," $5/$8*100 }' | sort -t, -k +9 -n -r
  | column -t -s , | tail -5
{% endhighlight %}

{% highlight html %}
Bob   REDACTED REDACTED REDACTED 1  2250  2375  2500   0.04
Alice REDACTED REDACTED REDACTED 0  225   237   250    0
{% endhighlight %}

And there we have it, an overview of the usage of all our mailboxes. Now finally let's use awk to filter by those mailboxes using a package larger than the minimum (250MB), and utilising less than ten percent, as these can definitely be downgraded:

{% highlight bash %}
cat data | paste -d , - - - - - - - - | sed 's/,,/,.,/' |
  awk -F, '{print $0 "," $5/$8*100 }' | sort -t, -k +9 -n -r |
  awk -F, '{ if ($8 > 250 && $9 < 10) print $3 "," $9"%" }' |
  column -t -s,
{% endhighlight %}

{% highlight html %}
Bob   0.32%
Alice 0.2%
{% endhighlight %}

And there we go, a whole list of accounts that can easily be be saved upon. Let's finish of with a quick calculation of how much we just saved:

{% highlight bash %}
cat data | paste -d , - - - - - - - - | sed 's/,,/,.,/'x |
  awk -F, '{ if ($8 > 250 && ($5/$8) < 10) print $0}' |
  wc -l | xargs echo "100 *" | bc
{% endhighlight %}

{% highlight html %}
6100
{% endhighlight %}

There we go, looks like two hours of playing with CapsperJS, tidy, sed, awk and grep just saved us €6100, and probably a factor two more once I inspect the data a bit closer. Not a bad result for 18 lines of javascript and a few lines of BASH!

