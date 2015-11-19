"use strict";

var test_explorer = require("./tools/test/test.query.js"); 
var test_logging = require("./tools/test/test.logging.js"); 
var test_hash = require("./tools/test/test.hash.js"); 
var Q = require("q");

var tests = [];
tests = tests.concat(test_explorer.tests);
tests = tests.concat(test_logging.tests);
tests = tests.concat(test_hash.tests);

for (var i in tests) {
	tests[i] = tests[i]();
}

Q.all(tests	
 ).then(function (values) {
	console.log(values.length + " tests passed.");
}).catch(function (err) {
	throw err;
}).done();

