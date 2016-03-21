var nock = require('nock');

var exports = module.exports = {};

var PROJECT_ID = 'fakeProject';

exports.cleanMocks = function() {
  nock.cleanAll();
};

exports.disableNetConnect = function() {
  nock.disableNetConnect();
};

exports.start = function() {
  nock.cleanAll();
  nock.disableNetConnect();
};

///// MOCK LOGIN /////
exports.mockLogin = function() {  
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
};

///// MOCK EMPTY FIND /////
exports.mockFindEmpty = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/'+PROJECT_ID+'/runQuery')
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
};

///// MOCK CREATE SUCCESS /////
exports.mockCreateSuccess = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/'+PROJECT_ID+'/commit')
    .reply(200, "0a320807122e0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120f0a04557365721080808080eddb8b0a", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Fri, 18 Mar 2016 13:43:54 GMT',
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
};

///// MOCK FIND USER /////
exports.mockFindUser1 = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/'+PROJECT_ID+'/runQuery')
    .reply(200, "0ab501080112770a750a2e0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120f0a04557365721080808080f8898c0a12150a046e616d65220d8a010a4a75616e205061626c6f12210a05656d61696c22188a01156a706469617a76617a406d63706c7573612e636f6d12090a036167652202101922360a34122e6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772110b1204557365721880808080f8898c0a0c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Fri, 18 Mar 2016 13:53:00 GMT',
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
};
