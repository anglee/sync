To run locally
```
$ node sync
```

To deploy on Heroku
```
$ heroku login
$ heroku create
$ git push heroku master
$ heroku ps:scale web=1
$ heroku open
$ heroku logs --tail
```

goto:

http://frozen-waters-1211.herokuapp.com
http://frozen-waters-1211.herokuapp.com/foo

Or

```
$ curl http://frozen-waters-1211.herokuapp.com
What do you sync?
$ curl http://frozen-waters-1211.herokuapp.com/foo
req.method = GET
req.url =/foo
```

