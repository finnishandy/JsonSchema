```
java -jar bin/selenium-server-standalone-2.48.2.jar 
```

##Example usage:

```
$ ./nightwatch --test tests/demotest.js
```
If you have installed nightwatch with-g (global) option you can skip this.

To use the test runner in your project simply create a new file called nightwatch and add the following:

For Linux and MacOSX:

```
#!/usr/bin/env node
require('nightwatch/bin/runner.js');
Then set the permissions:
```

```
$ chmod a+x nightwatch
For Windows:
```

Name the file nightwatch.js and add the following line:

```
require('nightwatch/bin/runner.js');
```
Then run as follows:

```
C:\workspace\project> node nightwatch.js
```

Get on webdriver server: http://127.0.0.1:4444/wd/hub/status

Desired Capabilities

{
  "browserName": "firefox",
  "javascriptEnabled": true,
  "acceptSslCerts": true,
  "platform": "ANY"
}