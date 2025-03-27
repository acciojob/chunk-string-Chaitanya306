function stringChop(str, size) {
  // your code here
	size=Number(size)
	const ans=[]
	let tempStr=''
	for(let a=0;a<str.length;a++){
		tempstr+=str[a]
		if(tempStr.length==size || a==str.length){
			ans.push(tempStr)
			tempStr=''
		}
	}
	return ans
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
