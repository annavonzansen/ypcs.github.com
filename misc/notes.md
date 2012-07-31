---
layout: default
title: Misc notes
private: true
---

 - Jekyll (@ GitHub Pages) might fail silently if:
     - submodules fail
     - module url isn't git://
     - you haven't pushed new submodule commits, but parent project is referring to those commits
 - Building CSS assets: `webassets -c _assets.yml build`
