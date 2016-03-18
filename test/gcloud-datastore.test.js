var should = require('./init.js');
var nock = require('nock');
var util = require('util');
var assert = require('chai').assert;
var db;

//nock.recorder.rec({output_objects: false});
//var nockCallObjects = nock.recorder.play();

nock('https://accounts.google.com:443', {"encodedQueryParams":true})
  .post('/o/oauth2/token')
  .reply(200, {"access_token":"ya29.qQL1X9bKpDz2rc-uspPBeQZ-BN55cy5fp4CJwO7-g18yBdtoNc5S7gyGCZ2XJUPrbWE","token_type":"Bearer","expires_in":3600}, { 'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
  pragma: 'no-cache',
  expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
  date: 'Fri, 18 Mar 2016 03:02:16 GMT',
  'content-disposition': 'attachment; filename="json.txt"; filename*=UTF-8\'\'json.txt',
  'set-cookie': [ 'NID=77=o9DSdeZ8KEK7GOxq3lkCDjWhhJQCRt468ES1jan1nGrmfKmWK0uevMAlet6bV1c6N5_nGY4XLvYM4bKuoL3ijtzKLPkGIas2TyC45D7AfAwFEpxK0kOjqLxie4l5NypG;Domain=.google.com;Path=/;Expires=Sat, 17-Sep-2016 03:02:16 GMT;HttpOnly' ],
  p3p: 'CP="This is not a P3P policy! See https://support.google.com/accounts/answer/151657?hl=en for more info."',
  'x-frame-options': 'SAMEORIGIN',
  'x-xss-protection': '1; mode=block',
  server: 'GSE',
  'alternate-protocol': '443:quic,p=1',
  'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
  'accept-ranges': 'none',
  vary: 'Accept-Encoding',
  connection: 'close' });

nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
  .post('/datastore/v1beta2/datasets/central-station-staging/runQuery')
  .reply(200, "\n\u0006\b\u0001\"\u0000(\u0002", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
  pragma: 'no-cache',
  expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
  date: 'Fri, 18 Mar 2016 03:02:16 GMT',
  'content-disposition': 'attachment',
  vary: 'X-Origin, Origin,Accept-Encoding',
  'content-type': 'application/x-protobuf',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'SAMEORIGIN',
  'x-xss-protection': '1; mode=block',
  server: 'GSE',
  'alternate-protocol': '443:quic,p=1',
  'alt-svc': 'quic=":443"; ma=2592000; v="31,30,29,28,27,26,25"',
  'accept-ranges': 'none',
  connection: 'close' });


describe('gcloud datastore connector', function() {
  before(function() {
    db = getDataSource();
    
    ACL = db.define('ACL', {
      property: { type: Object, index: true },
      accessType: { type: Object, index: true }
    });
    
    User = db.define('User', {
      name: { type: String, index: true },
      email: { type: String, index: true, unique: true },
      age: Number
    });
  });
  
  beforeEach(function (done) {
    done();
  });
  
  describe('For ACLs', function() {
    
    it('should return an empty set', function(done) {
      var propertyFilter = {where: {and: [
          {
              "name": "property",
              "op": "=",
              "val": {
                  "inq": [
                      "login",
                      "*"
                  ]
              }
          },
          {
              "name": "accessType",
              "op": "=",
              "val": {
                  "inq": [
                      "EXECUTE",
                      "*"
                  ]
              }
          }
        ]}};

      ACL.find(propertyFilter,function(err, result) { 
        assert.isUndefined(err, 'there was no error');
        assert.lengthOf(result, 0, 'Empty result set');

        done();
      });
    });
    
  });
});