function stringChop(str, size) {
  // your code here
	if (!str) return [];

	const chunks = [];

	for(let i=0;i < str.length; i+=chunkLength){
		chunks.push(str.slice(i,i + chunkLength));
	}
	return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
