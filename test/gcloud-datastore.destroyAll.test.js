var should = require('./init.js');
var util = require('util');
var assert = require('chai').assert;
var mocks = require('./mocks.js');
var db;
var ACL, User;

var nock = require('nock');
nock.recorder.rec({output_objects: false});

describe('gcloud datastore connector', function(){
  before(function(){
    db = getDataSource();
    ACL = db.define('ACL', {
      property: { type: Object, index: true },
      accessType: { type: Object, index: true }
    });
  });

  describe('destroyAll', function(){
    it('ACL.find with no filters should return 3 or more ACLs', function(done){
      mocks.mockLogin();
      mocks.mockLogin();
      mocks.mockLogin();
      mocks.mockCreate3AclsBeforeDestroy();
      ACL.create([{
          model: 'Client',
          property: 'find',
          accessType: 'EXECUTE'
        },
        {
          model: 'Client',
          property: 'update',
          accessType: 'EXECUTE'
        },
        {
          model: 'Client',
          property: 'create',
          accessType: 'EXECUTE'
        }], function(err, acls){

          assert.lengthOf(acls, 3, 'created ACLs should be 3');

          mocks.mockLogin();
          mocks.mockFindAllACLSCreatedBeforeDestroy();
          ACL.find({where:{}}, function(err, allAcls){
            assert.isUndefined(err, 'there\'s no errors');
            assert(allAcls.length >= 3, 'All ACLs are more than 3');
            done();
          });
        });
      });
      it('destroyAll should delete all records using no filter', function(done){
        mocks.mockLogin();
        mocks.mockDestroyAllAclEntities1();
        mocks.mockLogin();
        mocks.mockDestroyAllAclEntities2();
        ACL.destroyAll({}, function(err){
          assert(!(err), 'Should not have errors');
          mocks.mockLogin();
          mocks.mockFindAfterDestroyAllWithNoFilters()
          ACL.find({}, function(err, acls){
            console.log('Actual ACLs in database = ' + acls.length);
            assert.lengthOf(acls, 0, 'should be empty');
            done();
          });
        });
    });
  });

});
