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
  
  beforeEach(function () {
  });
  
  afterEach(function() {
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
        console.log("Stringify: "+JSON.stringify(result));
        assert.isUndefined(err, 'there was no error');
        assert.lengthOf(result, 0, 'Empty result set');

        done();
      });
    });
    
  });
  ///// USER TESTS /////
  describe('For User', function() {
    describe("when creating a new one", function() {
      mocks.mockLogin();
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
    
    describe("when creating multiple users", function() {
      mocks.mockLogin();
      mocks.mockLogin();
      mocks.mockLogin();
      mocks.mockCreateSuccess();
      mocks.mockCreateSuccess();
      
      it('should successfully create all of them', function(done) {
        var user1 = {
          name: "Juan Pablo",
          email: "jpdiazvaz@mcplusa.com",
          age: 25
        };
        var user2 = {
          name: "Michael Cizmar",
          email: "michaelcizmar@mcplusa.com",
          age: 24
        };
        User.create(user1, function(err, result) {
          assert.isNull(err, 'there was no error');
          assert.equal(result.name, user1.name);

          User.create(user2, function(err, result) {
            assert.isNull(err, 'there was no error');
            assert.equal(result.name, user2.name);
            done();
          });
        });
      });
    });
    
    // FAILING: Update method not defined in the Connector
    describe.skip("when updating a user email", function() {
      mocks.mockLogin();
      mocks.mockCreateSuccess();
      
      it('should successfully create all of them', function(done) {

        var user1 = {
          name: "Juan Pablo",
          email: "jpdiazvaz@mcplusa.com",
          age: 25
        };
        User.create(user1, function(err, result) {
          assert.isNull(err, 'there was no error');
          assert.equal(result.name, user1.name);
          
          User.updateAll({id: result.id}, {email: 'jpdiazvaz@mcplusa.cl'}, function(err, result) {
            console.log("Result: "+JSON.stringify(result));
            assert.equal(result.email, 'jpdiazvaz@mcplusa.cl');
            
            done();
          });
        });
      });
    });
    
    describe("when deleting one user", function() {
      mocks.mockLogin();
      mocks.mockLogin();
      mocks.mockLogin();
      mocks.mockCreateSuccess();
      mocks.mockFindUser1();
      mocks.mockDestroyUser1();
      mocks.mockFindEmpty();
      
      it('should return an empty set', function(done) {

        var user1 = {
          name: "Juan Pablo",
          email: "jpdiazvaz@mcplusa.com",
          age: 25
        };
        
        var id;
        User.create(user1, function(err, result) {
          assert.isNull(err, 'there was no error');
          assert.equal(result.name, user1.name);
          id = result.id;
          
          User.find({where:{id: id}}, function(err, result) {
            console.log("Result find: "+JSON.stringify(result));
            assert.lengthOf(result, 1, 'User return');
          
            User.destroyAll({id: id},function(err, result) {
              console.log("Result destroyAll: "+JSON.stringify(result));
              console.log("Error destroyAll: "+err);

              User.find({where:{id: id}},function(err, result) {
                console.log("Result find: "+JSON.stringify(result));
                assert.isUndefined(err, 'there was no error');
                assert.lengthOf(result, 0, 'Empty result set');

                done();
              });
            });
          });
        });
      });
    });
   
  });
});