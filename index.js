'use strict';

const https = require('https');
const path = require('path');

function request(resource, callback) {
  let options = {
    host: 'api.opensource.org',
    path: resource,
    method: 'GET'
  }

  return https.get(options, function (res) {
    let body = '';

    res.on('data', function(data) {
      body += data;
    });

    res.on('end', function() {
      let data = JSON.parse(body)
      if (data.errors)
        return callback(data.errors, null);
      else
        return callback(null, data);
    });
  });
}

module.exports.all = function all(callback) {
  return request('/licenses', callback);
}

module.exports.get = function get(id, callback) {
  return request(path.join('/license', id), callback);
}

module.exports.tagged = function tagged(keyword, callback) {
  return request(path.join('/licenses', keyword), callback);
}
