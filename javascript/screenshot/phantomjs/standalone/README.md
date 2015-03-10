# ScreenShot / PhantomJS  / standalone

* [PhantomJS Screen Capture](http://phantomjs.org/screen-capture.html)

  * to work with web fonts

    > use PhantomJS version 2.0.0
    >
    > custom build:
    > 
    > * [[GitHub] eugene1g / phantomjs - PhantomJS 2.0 bin](https://github.com/eugene1g/phantomjs/releases/tag/2.0.0-bin) - works with webfonts [ PhantomJS 2.0.0 binaries for OSX and linux (temp, until upstream is patched) ]


## commands

### github.js

```bash
$ phantomjs github.js

$ phantomjs --proxy=ip_host:port --proxy-auth=user:pass github.js
```

### rasterize.js

```bash
$ phantomjs rasterize.js https://github.com/erkobridee github_erkobridee.png

$ phantomjs --proxy=ip_host:port --proxy-auth=user:pass rasterize.js https://github.com/erkobridee github_erkobridee.png

$ phantomjs rasterize.js https://zavoloklom.github.io/material-design-iconic-font/icons.html material-design-iconic-font.png 1300px*1600px

$ phantomjs --proxy=ip_host:port --proxy-auth=user:pass rasterize.js https://zavoloklom.github.io/material-design-iconic-font/icons.html material-design-iconic-font.png 1300px*1600px
```
