export class Numbers  {
	constructor() { }
		
	static multiplesOf3And5UnderN(n: number): Array<number>{
		let result : number[] = [];
		
		for(let i=3;i<n;i++){
			if(i%3===0 || i%5===0){
				result.push(i);
			}
		}
		
		return result;
	}
}

