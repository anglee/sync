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

$ curl http://frozen-waters-1211.herokuapp.com/foo?first=ang
req.method = GET
req.url =/foo?first=ang
req.query = {"first":"ang"}

$ curl http://frozen-waters-1211.herokuapp.com/bar -d first=ang -d last=lee
os.hostname() = 2f81e7ff-0faa-4b45-88c4-cb947b40f9d4
req.method = POST
req.url =/bar
req.query = {}
req.body = {"first":"ang","last":"lee"}

$ curl http://frozen-waters-1211.herokuapp.com/eval --data-urlencode exp="new Date()"
"2014-10-10T03:08:51.590Z"
```

