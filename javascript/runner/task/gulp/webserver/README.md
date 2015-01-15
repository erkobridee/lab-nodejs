# Gulp web server support

* [[GitHub] AveVlad / gulp-connect](https://github.com/AveVlad/gulp-connect/) - Gulp plugin to run a webserver (with LiveReload)

* [[GitHub] schickling / gulp-webserver](https://github.com/schickling/gulp-webserver) - Streaming gulp plugin to run a local webserver with LiveReload [ Hint: This is a rewrite of gulp-connect | with proxy support ]

* [[GitHub] shakyShane / gulp-browser-sync](https://github.com/shakyShane/gulp-browser-sync) - How to use the BrowserSync module with gulp - [doc](http://www.browsersync.io/docs/gulp/) | [site](http://www.browsersync.io/)


## Proxy support

* [Use proxy middleware with gulp connect | stackoverflow](https://stackoverflow.com/questions/24546450/use-proxy-middleware-with-gulp-connect)

  * [[GitHub] tinganho / connect-modrewrite](https://github.com/tinganho/connect-modrewrite) - Modrewrite middleware for connect/express

```javascript
modRewrite([
  '^/api/(.*)$ http://localhost:3000/api/v1/$1 [P]'
])
```

* [[GitHub] andrewrk / connect-proxy](https://github.com/andrewrk/connect-proxy) - simple proxy as middleware [used by gulp-webserver] 

