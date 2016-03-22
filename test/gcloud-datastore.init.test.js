var assert = require('chai').assert;
var db;

describe('gcloud connector should initialize', function(){
  before(function(){
    db = getDataSource();
  });


  it('The connector should be defined', function(){
    assert.isDefined(db, 'The connector loaded correctly');
    assert(typeof(db.connect) === 'function', 'The connect function exists');
    assert(typeof(db.disconnect) === 'function', 'The disconnect function exists');
  });

  it('The connect function should return the callback', function(done){
    var afterMethod = function(){
      assert(true, 'This should run if the connect method runs correctly');
      done();
    }
    db.connect(afterMethod);
  });

  it('The disconnect function should return the callback', function(done){
    var afterMethod = function(){
      assert(true, 'This should run if the disconnect method runs correctly');
      done();
    }
    db.disconnect(afterMethod);
  });
});
