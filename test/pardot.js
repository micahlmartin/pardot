var Code    = require('code');
var expect  = Code.expect;
var Lab     = require('lab');
var lab     = exports.lab = Lab.script();

var pardot = require('../lib/pardot');


lab.test('authenticate fails when userKey is not specified', function(done) {

  pardot({
    email: 'test@gmail.com',
    password: 'easy'
  }).fail(function(err) {
    expect(err.message).to.equal('userKey must be specified');
    done();
  }).done();

});

lab.test('authenticate fails when userKey is blank', function(done) {

  pardot({
    userKey: '',
    email: 'test@gmail.com',
    password: 'easy'
  }).fail(function(err) {
    expect(err.message).to.equal('userKey must be specified');
    done();
  }).done();

});

lab.test('authenticate fails when email is not specified', function(done) {

  pardot({
    userKey: 'abc123',
    password: 'easy'
  }).fail(function(err) {
    expect(err.message).to.equal('email must be specified');
    done();
  }).done();

});

lab.test('authenticate fails when email is blank', function(done) {

  pardot({
    userKey: 'abc123',
    email: '',
    password: 'easy'
  }).fail(function(err) {
    expect(err.message).to.equal('email must be specified');
    done();
  }).done();

});

lab.test('authenticate fails when password is not specified', function(done) {

  pardot({
    userKey: 'abc123',
    email: 'test@gmail.com',
  }).fail(function(err) {
    expect(err.message).to.equal('password must be specified');
    done();
  }).done();

});

lab.test('authenticate fails when password is not specified', function(done) {

  pardot({
    userKey: 'abc123',
    email: 'test@gmail.com'
  }).fail(function(err) {
    expect(err.message).to.equal('password must be specified');
    done();
  }).done();

});


lab.test('authenticate fails when password is blank', function(done) {

  pardot({
    userKey: 'abc123',
    email: 'test@gmail.com',
    password: ''
  }).fail(function(err) {
    expect(err.message).to.equal('password must be specified');
    done();
  }).done();

});

