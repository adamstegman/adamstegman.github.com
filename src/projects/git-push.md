---
title: Git Push for iOS
subtitle: Push changes to a Github repository from iOS
status: retired
created_at: 2011-07-30T01:58Z
ended_at: 2012-12-06T02:38:43Z
kind: project
---
![Git Push icon](./git-push.png)

Git Push for iOS was to be an app that used [Github's API](http://developer.github.com/v3/git/) to POST a commit blob to a Github repository.

I stopped working on Git Push in 2012 due to enlarging scope and unclear vision.

Previously my blog was on [Tumblr](http://adamstegman.tumblr.com/), so I could update it from anywhere using the [iPhone application](http://itunes.apple.com/us/app/tumblr/id305343404?mt=8).
Now, since I host my [website](/) and [blog](//blog.adamstegman.com/) myself now and keep all the code on [Github](https://github.com/adamstegman/adamstegman.github.com), I need to keep on top of updates.

To do that, I want to be able to write a post from anywhere.
I found the right platform in [Nanoc::Heroku](https://github.com/mrrooijen/nanoc-heroku) which you can read more about on the [AdamStegman.com project page](/projects/adamstegman.html).
Nanoc::Heroku supports [Markdown](https://daringfireball.net/projects/markdown/) pages, which I could easily write from my iPhone or iPad.

Unfortunately, there are two key steps missing once I've written something on a mobile device.

- Commit the post to Github
- Run the deploy script

Currently, the former is not possible from an iOS device (as far as I can tell).
To remedy this, I'm writing Git Push.

It will create the requisite objects, then use [Github's new API](http://developer.github.com/v3/git/) to create a commit in the remote repository.

This is an extremely powerful capability.
I have not yet decided the best user experience for this, but it will likely involve Dropbox or something else instead of allowing in-app editing of files at first.
