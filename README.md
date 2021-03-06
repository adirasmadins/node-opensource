# Node-opensource

Node-opensource is an API Wrapper that allows you to query the Open Source License API with Nodejs.

# Example

```js
const licenses = require('node-opensource');

// Get all known licenses
licenses.all(function(err, data) {
  // Do something with data
})

// Get license from it's OSI ID
licenses.get("MIT", function(err, data) {
  // Do something with data
})

// Get license from keyword
licenses.get("copyleft", function(err, data) {
  // Do something with data
})
```
Using Promises
```js
const licenses = require('node-opensource');

// Get all known licenses
licenses.all()
.then(function(data) {
  // Do something with data
}).catch(function(error) {
  // Error
});

// Get license from it's OSI ID
licenses.get("MIT")
.then(function(data) {
  // Do something with data
}).catch(function(error) {
  // Error
});

// Get license from keyword
licenses.get("copyleft")
.then(function(data) {
  // Do something with data
}).catch(function(error) {
  // Error
});
```

# Installing

```
npm install node-opensource
```
