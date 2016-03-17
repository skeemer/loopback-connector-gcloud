var should = require('./init.js');
var util = require('util');
var db;

describe('gcloud datastore connector', function() {
  before(function() {
    db = getDataSource();
  });
  
  beforeEach(function (done) {
    done();
  });
  
  it('should create an object', function(done) {
    var testEntity = {
      col1: "col1value",
      col2: "col2value",
      col3: true
    };
    console.log(util.inspect(db));
    db.connect(function(msg) {
      console.log('Connected: '+msg);
    });
    db.create("testKind",testEntity,{},function(err, result) {
      console.log("Errors: "+err);
      console.log("Results: "+result);
    });
  });
});