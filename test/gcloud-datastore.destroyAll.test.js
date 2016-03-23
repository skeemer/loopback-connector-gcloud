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

  describe('destroyAll', function(){
    describe('when executing ACL.find with no filters', function(){
      it('should return 3 or more ACLs', function(done){
        mocks.mockLogin();
        mocks.mockLogin();
        mocks.mockLogin();
        mocks.mockCreate3AclsForTest();
        console.log('#################');
        console.log('mockCreate3Acls #1');
        console.log('#################');
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
            console.log('#################');
            console.log('mockCreate3Acls #2');
            console.log('#################');
            assert.lengthOf(acls, 3, 'created ACLs should be 3');
            console.log('#################');
            console.log('mockFindAllACLSCreatedBeforeDestroy #1');
            console.log('#################');
            console.log('#################');
            console.log('mockFindAllACLSCreatedBeforeDestroy #2');
            console.log('#################');

            assert(acls.length >= 3, 'All ACLs are more than 3');
            mocks.mockLogin();
            mocks.mockLogin();
            mocks.mockDestroyAllAclEntities();
            console.log('#################');
            console.log('mockDestroyAllAclEntities #1');
            console.log('#################');
            console.log('POOOOOOOOOOOOOOOW');
            console.log('#################');
            ACL.destroyAll({}, function(err){
              console.log('#################');
              console.log('POOOOOOOOOOOOOOOW2');
              console.log('#################');
              console.log('#################');
              console.log('mockDestroyAllAclEntities #2');
              console.log('#################');
              assert(!(err), 'Should not have errors');
              console.log('#################');
              console.log('mockFindAfterDestroyAllWithNoFilters #1');
              console.log('#################');
              var aclIds = acls.map(function(a) {return { id: a.id };});
              console.log('###########################');
              console.log('###########################');
              console.log(aclIds);
              console.log('###########################');
              console.log('###########################');
              mocks.mockLogin();
              mocks.mockFindAfterDestroyAllWithNoFilters();
              ACL.find({ where: { and: aclIds }}, function(err, aclsNew){
                console.log('#################');
                console.log('mockFindAfterDestroyAllWithNoFilters #2');
                console.log('#################');
                console.log('Actual ACLs in database = ' + aclsNew.length);
                assert.lengthOf(aclsNew, 0, 'should be empty');
                done();
              });
            });

          });
        });
      });
  });
});
