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
---

# Installation
Node.js is currently available in Debian unstable (sid) repositories. You can add sid repositories to wheezy without mixing too much packages using apt-pinning.

$EDITOR /etc/apt/preferences.d/999-pinning
    # Packages from wheezy get priority 900
    Package: *
    Pin: release n=wheezy
    Pin-Priority: 900

    # Well, I have also squeeze repositories enabled
    Package: *
    Pin: release n=squeeze
    Pin-Priority: 600

    # Other packages are installed only when forced (ie. apt-get -t unstable install <package>)
    Package: *
    Pin: release o=Debian
    Pin-Priority: -10

$EDITOR /etc/apt/sources.list
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
Currently
    update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10    


<3
