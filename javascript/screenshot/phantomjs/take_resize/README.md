# ScreenShot / PhantomJS  / take_resize

> **Usage:**
>
> phantomjs take_resize.js SOURCE OUTPUT _[OPTION1 OPTION2 OPTION3]_
>
> * **SOURCE**  : url or html file path
> * **OUTPUT**  : image.png or --base64 (output base64 on console)
> * **OPTION1** : page dimensions to take screenshot _[ default: 1024x768x0 >> pageWidth x pageWeight x pageTop ]_ or **OPTION3** flag
> * **OPTION2** : resize image to _[ default: 250x200 >> imageWidth x imageHeight ]_ or **OPTION3** flag
> * **OPTION3** : --delay=NUMBER time (ms) to take screenshot _[ default: 300 ms ]_

* [PhantomJS Screen Capture](http://phantomjs.org/screen-capture.html)

  * to work with web fonts

    > use PhantomJS version 2.0.0
    >
    > custom build:
    > 
    > * [[GitHub] eugene1g / phantomjs - PhantomJS 2.0 bin](https://github.com/eugene1g/phantomjs/releases/tag/2.0.0-bin) - works with webfonts [ PhantomJS 2.0.0 binaries for OSX and linux (temp, until upstream is patched) ]


## commands

### from file

```bash
$ phantomjs take_resize.js ../from_file/html/basic.html thumbnail/basic.png

$ phantomjs take_resize.js ../from_file/html/basic.html --base64

$ phantomjs take_resize.js ../from_file/html/bootstrap_example.html thumbnail/bootstrap_example.png

$ phantomjs take_resize.js ../from_file/html/bootstrap_example.html --base64
```

### from url

```bash
$ phantomjs take_resize.js http://github.com/erkobridee thumbnail/github_erkobridee.png --delay=1000

$ phantomjs take_resize.js http://github.com/erkobridee thumbnail/github_erkobridee.png

$ phantomjs take_resize.js http://github.com/erkobridee --base64

$ phantomjs --proxy=ip_host:port --proxy-auth=user:pass take_resize.js http://github.com/erkobridee thumbnail/github_erkobridee.png --delay=1000

$ phantomjs --proxy=ip_host:port --proxy-auth=user:pass take_resize.js http://github.com/erkobridee thumbnail/github_erkobridee.png

$ phantomjs --proxy=ip_host:port --proxy-auth=user:pass take_resize.js http://github.com/erkobridee --base64
```

--

```bash
$ phantomjs take_resize.js https://material.angularjs.org/#/demo/material.components.button thumbnail/button.png 1024x700 300x250 --delay=2000

$ phantomjs take_resize.js https://material.angularjs.org/#/demo/material.components.button thumbnail/button.png 1024x700 300x250

$ phantomjs take_resize.js https://material.angularjs.org/#/demo/material.components.button --base64 1024x700 300x250

$ phantomjs --proxy=ip_host:port --proxy-auth=user:pass take_resize.js https://material.angularjs.org/#/demo/material.components.button thumbnail/button.png 1024x700 300x250 --delay=2000

$ phantomjs --proxy=ip_host:port --proxy-auth=user:pass take_resize.js https://material.angularjs.org/#/demo/material.components.button thumbnail/button.png 1024x700 300x250

$ phantomjs --proxy=ip_host:port --proxy-auth=user:pass take_resize.js https://material.angularjs.org/#/demo/material.components.button --base64 1024x700 300x250
```

## Links

* [[GitHub] ariya / phantomjs / examples / waifor.js](https://github.com/ariya/phantomjs/blob/master/examples/waitfor.js)

* [[GitHub] ariya / phantomjs - ISSUE 11890](https://github.com/ariya/phantomjs/issues/11890) - Page.Content not working if contains img src="base64" /

* [PhantomJS - API](http://phantomjs.org/api/)

  * [Web Page Module](http://phantomjs.org/api/webpage/)

    * [open](http://phantomjs.org/api/webpage/method/open.html)

    * [content](http://phantomjs.org/api/webpage/property/content.html)

    * [viewportSize](http://phantomjs.org/api/webpage/property/viewport-size.html)

    * [clipRect](http://phantomjs.org/api/webpage/property/clip-rect.html)

    * [render](http://phantomjs.org/api/webpage/method/render.html)

    * [renderBase64](http://phantomjs.org/api/webpage/method/render-base64.html)

