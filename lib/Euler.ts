import {Numbers} from "./Numbers";

export function problem1(n=1000): number{
	const multiples : Array<number> = Numbers.multiplesOf3And5UnderN(n);
	const result : number = multiples.reduce((x,y) => x+y,0);
	return result;
};
