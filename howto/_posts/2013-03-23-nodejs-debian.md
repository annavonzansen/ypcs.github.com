---
layout: post-howto
title: Node.js in Debian wheezy (03/2013)
tags:
    - debian
    - nodejs
    - javascript
    - system administration
categories: howto
description: How to set-up node.js in Debian wheezy
language: en
---

This is an updated version of [a previous guide](http://ypcs.fi/howto/2012/10/09/nodejs-debian/).

# Installation
Node.js is currently available in Debian unstable (sid) (version 0.6.19) AND Debian experimental (version 0.10.1!!!). This guide shows you how to install from experimental. If you wan't to install from sid, please see previous guide. (Adding experimental to sources.list doesn't need apt-pinning, sid does.)

## /etc/apt/sources.list
    deb http://ftp.fi.debian.org/debian/ wheezy main non-free contrib
    #deb-src http://ftp.fi.debian.org/debian/ wheezy main non-free contrib
    
    deb http://security.debian.org/ wheezy/updates main contrib non-free
    #deb-src http://security.debian.org/ wheezy/updates main contrib non-free
    
    deb http://ftp.fi.debian.org/debian experimental main contrib non-free
    deb-src http://ftp.fi.debian.org/debian experimental main contrib non-free

Then, complete installation by running apt-get
    apt-get update && apt-get -t experimental install nodejs


# Link to /usr/bin/node
Currently *nodejs* package in Debian sid provides only `/usr/bin/nodejs`, and there exists lots of scripts which depend on `/usr/bin/node`, so they break when using node.js in Debian w/ default installation. Binary naming is caused by package *node* (Amateur Packet Radio Node program), which also provides `/usr/bin/node`. Debian package policy forbids conflicting binary naming, so node.js is renamed.

You can fix this in a Debian way by using `update-alternatives`.
    update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

Now node.js binary is linked to `/usr/bin/node`.

**<3**
