---
layout: post-howto
title: Suomalainen henkilökortti (FinEID) ja Linux
tags:
    - debian
    - fineid
    - hst
    - finnish
categories: howto
description: Suomalaisen henkilökortin käyttäminen Linuxissa
language: fi
---

Ohjeet Debianille, pienin muutoksin toiminevat myös muissa distroissa. Testattu Debian wheezy:llä. Omia aiheeseen liittyviä scriptejä löytyy [GitHubista](https://github.com/ypcs/scripts).

## Google Chrome / Chromium

Asenna vaaditut paketit
    apt-get install libnss3-tools

Lisää älykortti NSS-tietokantaan

    modutil -dbdir sql:/home/ville/.pki/nssdb -add PKCS#11 -libfile /usr/lib/x86_64-linux-gnu/opensc-pkcs11.so -mechanisms FRIENDLY -force

Käynnistä Chrome uudelleen, testaa esimerkiksi [FineID -testipalvelussa](https://vrk.fineid.fi/).


## Mozilla Firefox / Iceweasel
Preferences => Advanced => Encryption => Security Devices => Load.
Module Name: PKCS#11
Module Filename: /usr/lib/x86_64-linux-gnu/opensc-pkcs11.so


## OpenSSH
Ks. [ssh-sc -skripti GitHubissa](https://github.com/ypcs/scripts/blob/master/ssh-sc).