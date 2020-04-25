const wordReplace = function(num){
	//create an empty array named output
	let output = [];
	//create a loop from 1 to the parameter passed
	for(i =1; i<=num; i++){
		let j = '';
		if(i % 2 == 0){
			if(i % 3 == 0){
				if(i % 5 == 0){
					j = 'yu-gi-oh';
				}else{
					j = 'yu-gi';
				}
			}else if(i % 5 == 0){
				j = 'yu-oh';
			}else{
				j = 'yu';
			}
		}else if(i % 3 == 0){
			if(i % 5 == 0){
				j = 'gi-oh';
			}else{
				j = 'gi';
			}
		}else if(i % 5 == 0){
			j = 'oh';
		}else{
			j = i;
		}
		// Adding the elements into the array
		output.push(j);	
	}
	// returning the array of elements replaced
	return output;
}

// calling function wordReplace and passing argument 100
console.log('\nArray of elements replaced from 1-100:\n', wordReplace(100));

// calling function wordReplace and passing argument 45
console.log('\nArray of elements replaced from 1-45:\n',wordReplace(45));
