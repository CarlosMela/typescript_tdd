///<reference path="../typings/main/ambient/jasmine/jasmine.d.ts"/>
import { Numbers } from "../lib/Numbers";

describe("Calculate multiples of 3 and 5", function(){

	it("works with 3",function(){
			expect(Numbers.multiplesOf3And5UnderN(3)).toEqual([]);
	})

	it("works with 5",function(){
		expect(Numbers.multiplesOf3And5UnderN(5)).toEqual([3]);
	})

	it("should get 3, 5, 6 and 9 from 10", function(){


		expect(Numbers.multiplesOf3And5UnderN(10)).toEqual([3,5,6,9]);
	})

	it("should do it right from 20", function(){


		expect(Numbers.multiplesOf3And5UnderN(20)).toEqual([3,5,6,9,10,12,15,18]);
	})

});

describe("Even Fibonacci numbers", function(){
	var instance = new Numbers();

	it("works for 1", function(){
		expect(Numbers.fibonacciUntilMax(1)).toEqual([]);
	})

	it("works for 2", function(){
		expect(Numbers.fibonacciUntilMax(2)).toEqual([1]);
	})

	it("works for 3", function(){
		expect(Numbers.fibonacciUntilMax(3)).toEqual([1,2]);
	})

	it("works for 10", function(){
		expect(Numbers.fibonacciUntilMax(10)).toEqual([1,2,3,5,8]);
	})

	it("doesn't break for 4 millions", function(){
		expect(Numbers.fibonacciUntilMax(4000000)).toBeDefined;
	})


});
