var nock = require('nock');

var exports = module.exports = {};

var PROJECT_ID = 'central-station-staging';

exports.cleanMocks = function() {
  nock.cleanAll();
};

exports.disableNetConnect = function() {
  nock.disableNetConnect();
};

exports.nock = nock;

exports.reset = function() {
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

///// MOCK PING RESPONSE /////
exports.mockPingResponse = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery')
    .reply(200, "\n\u0006\b\u0001\"\u0000(\u0002", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Wed, 23 Mar 2016 19:30:27 GMT',
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
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery')
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

///// MOCK FIND USERS TO LATER DELETE /////
exports.mockFindUsersToDelete = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery')
    .reply(200, "0ab501080112770a750a2e0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120f0a0455736572108080808086dff10812150a046e616d65220d8a010a4a75616e205061626c6f12210a05656d61696c22188a01156a706469617a76617a406d63706c7573612e636f6d12090a036167652202101922360a34122e6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772110b120455736572188080808086dff1080c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Wed, 23 Mar 2016 21:11:16 GMT',
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

  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery')
    .reply(200, "0a3c080122360a34122e6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772110b120455736572188080808086dff1080c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Wed, 23 Mar 2016 21:11:16 GMT',
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

///// MOCK DESTROY 1 USER /////
exports.mockDestroyUser1 = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
   .post('/datastore/v1beta2/datasets/central-station-staging/commit')
   .reply(200, "\n\u0002\b\t", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
   pragma: 'no-cache',
   expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
   date: 'Wed, 23 Mar 2016 21:11:16 GMT',
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

///// MOCK RETURN AN EMPTY SET AFTER A DESTROY /////
exports.mockFindUsersAfterDestroy = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery')
    .reply(200, "\n\u0006\b\u0001\"\u0000(\u0002", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Wed, 23 Mar 2016 21:23:09 GMT',
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

/////  MOCK FIND CLIENT WITH NO RESULTS  /////
exports.mockFindClientNoResults = function() {
  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery')
    .reply(200, "\n\u0006\b\u0001\"\u0000(\u0002", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Tue, 22 Mar 2016 20:22:32 GMT',
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

/////  MOCKS CREATING 3 ACLS AND FILTERING BY THEM /////
exports.mockACLFilter = function() {
  this.mockLogin();

nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
  .post('/datastore/v1beta2/datasets/central-station-staging/runQuery', "0a001a271a050a0341434c221e0a1c0801121812160a0712056d6f64656c10051a098a0106436c69656e74")
  .reply(200, "0a8322080112760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809df9810812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080c088830812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080808688860812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080c09c920812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080efd2920812180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086b5c10812180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080c0facb0812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086face0812180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080ef99da0812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8dbde0812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080effde70812180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0e8c0800912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8a6870912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809bf48d0912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086fa8e0912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086ec970912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8cdaf0912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809de3d00912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080ef99da0912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080c088fd0912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080d98bff0912180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809df9810a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8a6870a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086ab900a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080efd2920a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086ec970a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086b5c10a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080809de3d00a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080ef99da0a12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010663726561746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080fca7880b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086fa8e0b12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8db9e0b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080ef8ecb0b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080d9d5f60b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080808688fa0b12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7412760a740a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080c088fd0b12180a0a61636365737354797065220a8a01074558454355544512150a0870726f706572747922098a010675706461746512120a056d6f64656c22098a0106436c69656e7422350a33122d6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772100b120341434c1880808080c088fd0b0c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
  pragma: 'no-cache',
  expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
  date: 'Thu, 24 Mar 2016 00:46:11 GMT',
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

nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
  .post('/datastore/v1beta2/datasets/central-station-staging/runQuery', "0a001a5e1a050a0341434c221e0a1c0801121812160a0712056d6f64656c10051a098a0106436c69656e743a350a33122d6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772100b120341434c1880808080c088fd0b0c18002000")
  .reply(200, "0a3b080122350a33122d6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772100b120341434c1880808080c088fd0b0c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
  pragma: 'no-cache',
  expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
  date: 'Thu, 24 Mar 2016 00:46:12 GMT',
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

nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
  .post('/datastore/v1beta2/datasets/central-station-staging/runQuery', "0a001a281a050a0341434c221f0a1d0801121912170a0a120870726f706572747910051a078a010466696e64")
  .reply(200, "0ac30b080112740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080efd2920812180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086b5c10812180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086face0812180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8a6870912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8cdaf0912180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086ab900a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080efd2920a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c108080808086b5c10a12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080fca7880b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c10808080c0a8db9e0b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080ef8ecb0b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7412740a720a2d0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120e0a0341434c1080808080d9d5f60b12180a0a61636365737354797065220a8a01074558454355544512130a0870726f706572747922078a010466696e6412120a056d6f64656c22098a0106436c69656e7422350a33122d6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772100b120341434c1880808080d9d5f60b0c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
  pragma: 'no-cache',
  expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
  date: 'Thu, 24 Mar 2016 00:46:12 GMT',
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


nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
  .post('/datastore/v1beta2/datasets/central-station-staging/runQuery', "0a001a5f1a050a0341434c221f0a1d0801121912170a0a120870726f706572747910051a078a010466696e643a350a33122d6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772100b120341434c1880808080d9d5f60b0c18002000")
  .reply(200, "0a3b080122350a33122d6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772100b120341434c1880808080d9d5f60b0c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
  pragma: 'no-cache',
  expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
  date: 'Thu, 24 Mar 2016 00:46:13 GMT',
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

/////  MOCKS FOR UPDATING 2 USERS /////
exports.mockUpdateMultipleUsers = function() {
  nock('https://accounts.google.com:443', {"encodedQueryParams":true})
    .post('/o/oauth2/token')
    .reply(200, {"access_token":"ya29.rwKPXgIqeke_TvQQTicv8Uz9LehH-YQNNf1Eh1O3Gm6hV0msQqdAY4sHetPj_Bfkejs","token_type":"Bearer","expires_in":3600}, { 'content-type': 'application/json; charset=utf-8',
    'x-content-type-options': 'nosniff',
    'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    pragma: 'no-cache',
    expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
    date: 'Thu, 24 Mar 2016 01:20:39 GMT',
    'content-disposition': 'attachment; filename="json.txt"; filename*=UTF-8\'\'json.txt',
    'set-cookie': [ 'NID=77=rZ0SMdy7IQIk82oLzVs0JZhqwDubASzJI4sb4fx-WeFQR3GhQ2axEeem4v2fsXWCLSFLLqhkurE04gSg6FtNOurHW1VJPO-JkLqkzayLunR6SxwwJx2grL6AFJAQNFSf;Domain=.google.com;Path=/;Expires=Fri, 23-Sep-2016 01:20:39 GMT;HttpOnly' ],
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
    .post('/datastore/v1beta2/datasets/central-station-staging/commit', "125722550a0812060a045573657212170a046e616d65220f8a010a4a75616e205061626c6f780112230a05656d61696c221a8a01156a706469617a76617a406d63706c7573612e636f6d7801120b0a036167652204101978012802")
    .reply(200, new Buffer('CjIIBxIuChsaGXN+Y2VudHJhbC1zdGF0aW9uLXN0YWdpbmcSDwoEVXNlchCAgICAhuyXCw==','base64'), { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
      pragma: 'no-cache',
      expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
      date: 'Thu, 24 Mar 2016 01:20:40 GMT',
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

  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/commit', "125f225d0a0812060a0455736572121b0a046e616d6522138a010e4d69636861656c2043697a6d6172780112270a05656d61696c221e8a01196d69636861656c63697a6d6172406d63706c7573612e636f6d7801120b0a036167652204101978012802")
    .reply(200, new Buffer('CjIIBxIuChsaGXN+Y2VudHJhbC1zdGF0aW9uLXN0YWdpbmcSDwoEVXNlchCAgIDAqLHWCg==', 'base64'), { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
      pragma: 'no-cache',
      expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
      date: 'Thu, 24 Mar 2016 01:20:40 GMT',
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

  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery', "\n\u0000\u001a\u001f\u001a\u0006\n\u0004User\"\u0015\n\u0013\b\u0001\u0012\u000f\u0012\r\n\u0005\u0012\u0003age\u0010\u0005\u001a\u0002\u0010\u0019")
    .reply(200, new Buffer('CrYCCAESfwp9Ci4KGxoZc35jZW50cmFsLXN0YXRpb24tc3RhZ2luZxIPCgRVc2VyEICAgIDGxJgIEhkKBG5hbWUiEYoBDk1pY2hhZWwgQ2l6bWFyEiUKBWVtYWlsIhyKARltaWNoYWVsY2l6bWFyQG1jcGx1c2EuY29tEgkKA2FnZSICEBkSdwp1Ci4KGxoZc35jZW50cmFsLXN0YXRpb24tc3RhZ2luZxIPCgRVc2VyEICAgIDv0pIJEhUKBG5hbWUiDYoBCkp1YW4gUGFibG8SIQoFZW1haWwiGIoBFWpwZGlhenZhekBtY3BsdXNhLmNvbRIJCgNhZ2UiAhAZIjYKNBIuahlzfmNlbnRyYWwtc3RhdGlvbi1zdGFnaW5nchELEgRVc2VyGICAgIDv0pIJDBgAIAAoAg==','base64'), { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
      pragma: 'no-cache',
      expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
      date: 'Thu, 24 Mar 2016 01:20:40 GMT',
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

  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery')
    .reply(200, new Buffer('CjwIASI2CjQSLmoZc35jZW50cmFsLXN0YXRpb24tc3RhZ2luZ3IRCxIEVXNlchiAgICAhuyXCwwYACAAKAI=', 'base64'), { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
      pragma: 'no-cache',
      expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
      date: 'Thu, 24 Mar 2016 01:20:41 GMT',
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

  nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/commit')
    .reply(200, new Buffer('CgIICA==','base64'), { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
      pragma: 'no-cache',
      expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
      date: 'Thu, 24 Mar 2016 01:20:42 GMT',
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

/////  MOCKS FOR UPDATING 1 USER'S EMAIL /////
exports.mockUpdate1UserEmail = function() {
    this.mockLogin();

    nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/commit', "125722550a0812060a045573657212170a046e616d65220f8a010a4a75616e205061626c6f780112230a05656d61696c221a8a01156a706469617a76617a406d63706c7573612e636f6d7801120b0a036167652204101978012802")
    .reply(200, "0a320807122e0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120f0a045573657210808080c0a8dbde0a", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
        pragma: 'no-cache',
        expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
        date: 'Thu, 24 Mar 2016 02:06:04 GMT',
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


    nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery', "0a001a341a060a0455736572222a0a280801122412220a0912075f5f6b65795f5f10051a132a11120f0a045573657210808080c0a8dbde0a")
    .reply(200, "0ab501080112770a750a2e0a1b1a19737e63656e7472616c2d73746174696f6e2d73746167696e67120f0a045573657210808080c0a8dbde0a12150a046e616d65220d8a010a4a75616e205061626c6f12210a05656d61696c22188a01156a706469617a76617a406d63706c7573612e636f6d12090a036167652202101922360a34122e6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772110b12045573657218808080c0a8dbde0a0c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
        pragma: 'no-cache',
        expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
        date: 'Thu, 24 Mar 2016 02:06:05 GMT',
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

    nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/runQuery', "0a001a6c1a060a0455736572222a0a280801122412220a0912075f5f6b65795f5f10051a132a11120f0a045573657210808080c0a8dbde0a3a360a34122e6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772110b12045573657218808080c0a8dbde0a0c18002000")
    .reply(200, "0a3c080122360a34122e6a19737e63656e7472616c2d73746174696f6e2d73746167696e6772110b12045573657218808080c0a8dbde0a0c180020002802", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
        pragma: 'no-cache',
        expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
        date: 'Thu, 24 Mar 2016 02:06:06 GMT',
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



    nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
    .post('/datastore/v1beta2/datasets/central-station-staging/commit', "125912570a11120f0a045573657210808080c0a8dbde0a12150a046e616d65220d8a010a4a75616e205061626c6f12200a05656d61696c22178a01146a706469617a76617a406d63706c7573612e636c12090a03616765220210192802")
    .reply(200, "\n\u0002\b\u0004", { 'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
        pragma: 'no-cache',
        expires: 'Fri, 01 Jan 1990 00:00:00 GMT',
        date: 'Thu, 24 Mar 2016 02:06:06 GMT',
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


}
