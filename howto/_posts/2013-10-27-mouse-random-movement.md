---
layout: post-howto
title: Note to myself: when mouse acts strangely
tags:
    - debian
    - mouse
    - touchpad
    - x11
categories: howto
description: Note to myself: when mouse acts strangely
language: en
---

My laptop mouse went crazy after resuming from standby. Running Debian 7 
wheezy, blah blah blah. Touchpad was moving my cursor randomly, nothing 
seemed to work, problem continued after reboot (which is _VERY_ 
strange...)

Workaround was

    rmmod psmouse

If trying to add module back (`modprobe psmouse`), problem is there 
again. Aargh. *UPDATE:* Couple minutes later, I tried again to restore 
`psmouse` module with modprobe, and it began working again. Yahoo! Ie.

    modprobe psmouse

`dmesg` doesn't show failures related to mouse, mouse was working fine 
before going to standby, `unattended-upgrades` package is installed, 
haven't installed any new apps lately, blah blah...

    $ uname -a
    Linux silakka 3.2.0-4-amd64 #1 SMP Debian 3.2.51-1 x86_64 GNU/Linux
    
    $ md5sum psmouse.ko
    c106ce1478d4d4e15d502c212a9bf6c6  /lib/modules/3.2.0-4-amd64/kernel/drivers/input/mouse/psmouse.ko
    
    $ dmesg |grep psmouse
    [   15.305631] psmouse serio1: synaptics: Touchpad model: 1, fw: 8.1, id: 0x1e2b1, caps: 0xd001a3/0x940300/0x127c00
    [   15.305650] psmouse serio1: synaptics: serio: Synaptics pass-through port at isa0060/serio1/input0
    
Quick review of `/var/log/dpkg.log` tells, that no packages have been 
upgraded in last 5 days.

Exact device

    I: Bus=0011 Vendor=0002 Product=0007 Version=01b1
    N: Name="SynPS/2 Synaptics TouchPad"
    P: Phys=isa0060/serio1/input0
    S: Sysfs=/devices/platform/i8042/serio1/input/input21
    U: Uniq=
    H: Handlers=mouse1 event12 
    B: PROP=5
    B: EV=b
    B: KEY=e520 10000 0 0 0 0
    B: ABS=660800011000003

