export function mergeStrings(a: string, b: string): string {
  	// TODO: implement me

	var res='';

	for (var i in a){
		res+= a[i];
		if(b[i] != undefined) res+=b[i];
	}

	if(a.length < b.length) res+=b.substr(a.length, b.length);
	
  	return res;
}
