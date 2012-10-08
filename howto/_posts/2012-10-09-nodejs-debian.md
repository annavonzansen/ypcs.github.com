---
layout: post-howto
title: Node.js in Debian wheezy
tags:
    - debian
    - nodejs
    - javascript
    - system administration
categories: howto
description: How to set-up node.js in Debian wheezy
language: en
---

# Installation
Node.js is currently available in Debian unstable (sid) repositories. You can add sid repositories to wheezy without mixing too much packages using apt-pinning.

## /etc/apt/preferences.d/999-pinning
    # Packages from wheezy get priority 900
    Package: *
    Pin: release n=wheezy
    Pin-Priority: 900

    # Well, I have also squeeze repositories enabled, but I prefer wheezy
    Package: *
    Pin: release n=squeeze
    Pin-Priority: 600

    # Other packages are installed only when forced (ie. apt-get -t unstable install <package>)
    Package: *
    Pin: release o=Debian
    Pin-Priority: -10

## /etc/apt/sources.list
    deb http://ftp.fi.debian.org/debian/ wheezy main non-free contrib
    #deb-src http://ftp.fi.debian.org/debian/ wheezy main non-free contrib
    
    deb http://security.debian.org/ wheezy/updates main contrib non-free
    #deb-src http://security.debian.org/ wheezy/updates main contrib non-free
    
    deb http://ftp.se.debian.org/debian/ sid main non-free contrib
    #deb-src http://ftp.fi.debian.org/debian/ sid main non-free contrib
    
    deb http://ftp.fi.debian.org/debian/ squeeze main contrib non-free
    #deb-src http://ftp.fi.debian.org/debian/ squeeze main contrib non-free
    
    deb http://security.debian.org/ squeeze/updates main contrib non-free
    #deb-src http://security.debian.org/ squeeze/updates main contrib non-free
    
    deb http://ftp.debian.org/debian/ squeeze-updates main contrib non-free
    #deb-src http://ftp.debian.org/debian/ squeeze-updates main contrib non-free

Then, complete installation by running apt-get
    apt-get -t unstable install nodejs npm


# Link to /usr/bin/node
Currently *nodejs* package in Debian sid provides only `/usr/bin/nodejs`, and there exists lots of scripts which depend on `/usr/bin/node`, so they break when using node.js in Debian w/ default installation. Binary naming is caused by package *node* (Amateur Packet Radio Node program), which also provides `/usr/bin/node`. Debian package policy forbids conflicting binary naming, so node.js is renamed.

You can fix this in a Debian way by using `update-alternatives`.
    update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

Now node.js binary is linked to `/usr/bin/node`.

**<3**
