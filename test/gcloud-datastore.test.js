var should = require('./init.js');
var util = require('util');
var assert = require('chai').assert;
var mocks = require('./mocks.js');
var db;

//var nock = require('nock');
//nock.recorder.rec({output_objects: false});

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
    User.destroyAll(function () {
      done();
    });
  });
  
  afterEach(function() {
    mocks.cleanMocks();
  });
  
  ///// ACL TESTS /////
  describe('For ACLs', function() {
    mocks.mockLogin();
    mocks.mockFindEmpty();
    
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
  
  ///// USER TESTS /////
  describe('For User', function() {
    mocks.mockLogin();
    mocks.mockCreateSuccess();
    mocks.mockFindUser1();
    
    it('should create a new user', function(done) {
      var user1 = {
        name: "Juan Pablo",
        email: "jpdiazvaz@mcplusa.com",
        age: 25
      };
      User.create(user1, function(err, result) {
        assert.isNull(err, 'there was no error');
        console.log("Result: "+JSON.stringify(result));
        console.log("Result id: "+result.id);

        User.findById(result.id, function(err, result) {
          assert.isUndefined(err, 'there was no error');
          
          assert.equal(result.name, user1.name, "user name got added correctly");
          assert.equal(result.email, user1.email, "user email got added correctly");
          assert.equal(result.age, user1.age, "user age got added correctly");

          console.log("User result: "+JSON.stringify(result) + " err: "+err);
          done();
        });
      });
    });
    
  });
});