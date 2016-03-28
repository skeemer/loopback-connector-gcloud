var should = require('./init.js');
var util = require('util');
var assert = require('chai').assert;
var mocks = require('./mocks.js');
var db;
var ACL, User;

// var nock = require('nock');
// nock.recorder.rec({output_objects: false});

describe('gcloud datastore connector', function(){
  before(function(){
    db = getDataSource();
    ACL = db.define('ACL', {
      property: { type: Object, index: true },
      accessType: { type: Object, index: true }
    });
  });

  describe('destroyAll Method', function(){
    it('should create 3 ACLs and then delete all existing ACLs', function(done){
      mocks.mockLogin();
      mocks.mockLogin();
      mocks.mockLogin();
      mocks.mockCreate3AclsForTest();
      ACL.create([{
          model: 'TestModel',
          property: 'testFind',
          accessType: 'true'
        },
        {
          model: 'TestModel',
          property: 'testUpdate',
          accessType: 'false'
        },
        {
          model: 'TestModel',
          property: 'testCreate',
          accessType: 'nullable'
        }], function(err, acls){
          assert.lengthOf(acls, 3, 'created ACLs should be 3');
          assert(acls.length >= 3, 'All ACLs are more than 3');
          mocks.mockLogin();
          mocks.mockLogin();
          mocks.mockDestroyAllAclEntities();
          ACL.destroyAll({}, function(err){
            assert(!(err), 'Should not have errors');
            mocks.mockLogin();
            mocks.mockFindAfterDestroyAllWithNoFilters();
            ACL.find({}, function(err, aclsNew){
              assert.lengthOf(aclsNew, 0, 'should be empty');
              mocks.reset();
              done();
            });
          });
        });
      });
    });
});
