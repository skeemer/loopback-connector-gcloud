var should = require('./init.js');
var util = require('util');
var assert = require('chai').assert;
var mocks = require('./mocks.js');
var db;
var Client, ACL;

// var nock = require('nock');
// nock.recorder.rec({output_objects: false});

describe('gcloud datastore connector filters', function(){
  before(function(){
    db = getDataSource();
    Client = db.define('Client', {
      email: { type: String, index: true, unique: true },
      full_name: { type: String }
    });

    ACL = db.define('ACL', {
      model: { type: String },
      property: { type: String },
      accessType: { type: String }
    });
  });

  beforeEach(function () {
  });

  it('Clients should return empty with a non existent filter', function(done){
    mocks.mockLogin();
    mocks.mockFindClientNoResults();
    Client.find({ where: { email: 'notExistentEmailAddress' } }, function(err, clients){
      assert.isUndefined(err, 'there was no error');
      assert.lengthOf(clients, 0, 'Empty result set');
      done();
    });
  });

  it('It should find entities with filters after creation in diverse situations', function(done){
    mocks.mockLogin();
    mocks.mockLogin();
    mocks.mockLogin();
    mocks.mockCreate3Acls();
    ACL.create([
      {
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
      }
    ], function(err, ACLs){
      mocks.mockLogin();
      mocks.mockFindAclsWithModelClient();
      ACL.find({ where: { model: 'Client' } }, function(err1, acls1){
        assert.isUndefined(err1, 'there was no error');
        assert(acls1.length >= 3, 'This should return at least 3');
        mocks.mockLogin();
        mocks.mockFindAclsWithPropertyFind();
        ACL.find({ where: { property: 'find' } }, function(err2, acls2){
          assert.isUndefined(err2, 'there was no error');
          assert(acls1.length > acls2.length, 'This should return less records as the previous query');
          done();
        });
      });
    });
  });

});
