function stringChop(str, size) {
  // your code here
	if (!str || typeof str !== "string") return [];
	if (!size || typeof size !== "number" || size <=0){
		throw new Error("size must be a positive number.");
	}

	const chunks = [];

	for(let i = 0; i < str.length; i += size){
		size.push(str.slice(i,i + size));
	}
	return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
