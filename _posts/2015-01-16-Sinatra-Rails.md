---
layout: post
title: "Sinatra before Rails"
quote: "My first WDI project-- with quotes from DHH!"
image:
      url: /media/2015-01-16-Sinatra-Rails/sinatra.jpg
comments: true
theme_color: 302F2D
---

In the first four weeks of my web development immersive course I learned enough HTML/CSS, Git, Ruby, and Sinatra to create and deploy a website with CRUD (Create, Read, Update, and Delete) functionality. The class is definitely going to be a grind, but I’m already thoroughly impressed with how much we’ve learned.

We have a two-week holiday break and once we get back we’ll have said our good-bye sto Ol’ Blue Eyes—Sinatra took the stage only a handful of times—and will be begin learning Rails as our more permanent backend framework. 

I’ve started the Rails for Zombies track on Code School, but I’m interested in learning a little more background info on both languages and if I should hastily dump Sinatra.

Let me share what I’ve dug up so far:

Sinatra is a younger framework than Rails. It was created by Blake Mizerany in 2007 and is currently being maintained by Konstantin Haase. There’s no magic when it comes to routing in Sinatra, one must think about the applications architecture. Translation: I hope you like writing routes because you’re going to have write them all yourself. This may seem annoying, but I believe is actually good for a noob like myself since it forces me to (at least somewhat) understand what’s going on and I won’t be staring at a bunch of files I know nothing about.

David Heinemeier Hansson, the creator of Rails, validated the value of Sinatra from a teaching perspective in our email correspondence saying, “Sinatra is wonderful from a teaching perspective. It’s the easiest way in Ruby to get to hello world without getting bogged down with all the amenities needed for a bigger app.”

For the projects my class created, it seems like Sinatra was the perfect framework since as David told me, “If your entire app has less screens than what you can count on two hands, it may very well be a good solution. I think as soon as you have an app of material size – say a Basecamp, a Github, a 500px, a Discourse, an Airbnb, or whatever – it’s not a great fit any more. But the same goes the other way. Rails is a tad heavy if all you need is 5 actions.”

I didn’t entirely understand why at the time, but I now know that Rails is armed with things like Scaffolding and Devise. These tools would’ve seemingly allowed me to get my backend fully working in a day versus the three-day trek Sinatra was, but at what cost for my growth as a developer? Each issue I had with setting up CRUD functionality meant that I had to go in and figure out what went amuck with my code. Doing so allowed me to both understand and explain to someone what each line of my code is doing.

Thanks for making us do things the hard way Jesse, Sean, and Pam. Now that the high of DHH emailing me back in <20mins is wearing off it’s time to get back to Code School. 