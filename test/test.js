const assert = require("chai").assert;
const myApp = require("../app/app.js");

describe("arithGeo", function(){
 	describe("handle input", function(){
	 it("should return Arithmetic as [1,2,3,4,5,6,7]", function(){
	 	assert.equal(myApp.arithGeo([1,2,3,4]),"Arithmetic");
	 });
     it("should return Geometric as [2,4,8,16,32,64]", function(){
	 	assert.equal(myApp.arithGeo([2,4,8,16]),"Geometric");
	 });
	
	it("should return 0 as []", function(){
	 	assert.equal(myApp.arithGeo([]),0);
	 });
	it("should return -1 as [1,2,7,18,19]", function(){
	 	assert.equal(myApp.arithGeo([1,2,7,18,19]),-1);
	 });
    
	it("should return -1 as [1,3]", function(){
	 	assert.equal(myApp.arithGeo([1,3]),-1);
	 });
     it("should return -1 as [8]", function(){
	 	assert.equal(myApp.arithGeo([8]),-1);
	 });

	it("should return -1 as [0]", function(){
	 	assert.equal(myApp.arithGeo([0]),-1);
	 });
	});

});