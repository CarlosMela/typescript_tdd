export class Numbers  {
	constructor() { }

	/**
	 * Given a positive integer returns a array of numers under that number that
	 * can be divided either by 3 or 5.
	 */
	static multiplesOf3And5UnderN(n: number): Array<number> {
		let result : number[] = [];

		for(let i=3;i<n;i++){
			if(i%3===0 || i%5===0){
				result.push(i);
			}
		}

		return result;
	}

	/**
	 * Return array with all fibonacci numbers smaller than a given number (max).
	 */
	static fibonacciUntilMax(max: number) : Array<number> {
		let result : number[] = [1];

		while(result[result.length-1]<max){
			result = Numbers.fibonacciNPlus1(result);
		}

		result.pop();
		return result;
	}

	/**
	 * Given a array representing a fibonacci series calculate the next item and
	 * pushes it to the end of the array.
	 */
	private static fibonacciNPlus1(fib: Array<number>) : Array<number> {
		const l = fib.length;
		if(fib.length>1){
			fib.push(fib[l-1]+fib[l-2]);
			return fib;
		}else if(l==1){
			return [1,2];
		}else{
			return [1];
		}
	}

}
