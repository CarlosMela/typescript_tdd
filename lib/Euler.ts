import {Numbers} from "./Numbers";

export function problem1(n=1000): number{
	const multiples : Array<number> = Numbers.multiplesOf3And5UnderN(n);
	const result : number = multiples.reduce((x,y) => x+y,0);
	return result;
};

export function problem2(n=4000000): number{
	const multiples : Array<number> = Numbers.fibonacciUntilN(n);
	return multiples
	.filter( x => x%2===0)
	.reduce((x,y) => x+y,0);
};
