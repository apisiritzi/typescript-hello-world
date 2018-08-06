export function distinctPairs(items: Array<number>, target: number): number {
  // TODO: implement me

  	var pairs = {};
  	var count = 0;

	for (var i in items){
		for (var j in items){
			if(items[i] + items[j] == target){
				if(pairs[items[i]] == undefined && pairs[items[j]] == undefined){
					count++;
					pairs[items[i]] = true;
					pairs[items[j]] = true;
				}
			}
		}
	}

  	return count;
}
