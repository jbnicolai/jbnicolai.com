---
layout: post
title:  "PhantomJS data mining"
---

As a moderately large company we rent mail boxes for our employees at a hosting provider; a lot of mailboxes. These come in varying sizes, and naturally the larger you go the more expensive they become.

The other day I received an email requesting several new accounts and set upon creating these when I came across what seemed to be a rather inefficient allocation. The user had a mid-size tier, costing about €150 per year, while he could seemingly make do with the very smallest tier of about €50 annually.

This, of course, made me curious about our other allocations and I went looking for an overview of all our mail accounts' usage. No such luck. The only way to see how much of the rented space was actually being used was by navigating the - non-rest and stateful - web interface of our hosting provider and looking up the statistics for each user individually.

Challenge accepted!

<!--more-->

I've gotten tired of using <a href="http://docs.seleniumhq.org/">selenium</a> lately, and been meaning to look into some of <a href="http://phantomjs.org/">PhantomJS</a> based alternatives. My eye had fallen on <a href="http://casperjs.org/">CasperJS</a> and I decided to give it a spin.

Using <a href="http://brew.sh/">brew</a> I downloaded the latest development release:

{% highlight bash %}
$ brew update
$ brew install casperjs --devel
{% endhighlight %}

The script in it's entirety can be found in this [gist][gist], but walking per section:

{% highlight js %}
var casper = require('casper').create({ verbose: true, logLevel: 'info' });
var credentials = JSON.parse(require('fs').read('./credentials.json'));
var url = 'private';

casper.start(url + '/user/login', function() {
  this.fill('form#login_form', credentials, true);
 });
{% endhighlight %}

The first line initialises CasperJS, with some logging enabled. The second line reads in a simple json file containing the form fields and values of the login page, while the third line contains the base url of our hosting provider.

In the next section casper is told to navigate to said url's login page, fill in the specified form with the credentials and submit. It's that easy!

{% highlight js %}
casper.thenOpen(url+'/subscription/config/xebia.com/exchange_mailbox', function() {
  this.getElementsInfo('tr td  a').forEach(function (node) {
    if (node.attributes.nicetitle === "View") {
{% endhighlight %}

All logged in, it's time to navigate to the exchange's overview page. Here every user's account details are linked to, in a node with the attribute nicetitle="view". Naturally, we want to iterate over these. This is where a small hitch in the plan was encountered.. the html is completely unstructured. Simply a table of varying dimensions with label, value pairs. I decide to postpone the problem, and for now simply fetch the entire element:

{% highlight js %}
casper.thenOpen(url + node.attributes.href, function() {
  require('fs').write('output',
    JSON.stringify(this.getElementInfo('div.contentleft').html, 'a'));
});
{% endhighlight %}

Ending it all with a:

{% highlight js %}
casper.run();
{% endhighlight %}

It's time to dive in to the console and give it a spin:

{% highlight bash %}
$ casperjs fetch.js
{% endhighlight %}

Excellent! Casper is spinning along, discovering and fetching the data, and I can see a tail of the generated output file streaming in. Unreadable, but the data is all there. See part two for the data analysis using BASH.

[gist]: https://gist.github.com/jbnicolai/8923825
