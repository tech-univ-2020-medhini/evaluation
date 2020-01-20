function score(throwsArray){
	let calculatedScore = 0;
	let turnNumber = 1;
	if(throwsArray == undefined){
		return calculatedScore;
	}
	let firstThrow = true;
	for(let i=0;i<throwsArray.length;i++){
		if(!firstThrow){
			if(throwsArray[i]+throwsArray[i-1] < 10){
				calculatedScore = calculatedScore + throwsArray[i] + throwsArray[i-1];
				turnNumber ++;
			}
			else{
				calculatedScore = calculatedScore + throwsArray[i+1] + throwsArray[i] + throwsArray[i-1];
				turnNumber++;
			}
			firstThrow=!firstThrow;
		}
		else{
			if(throwsArray[i] == 10){
				calculatedScore = calculatedScore + throwsArray[i] + throwsArray[i+1] + throwsArray[i+2];
				turnNumber++;
                
			}
			else{
				firstThrow=!firstThrow;
			}
		}
		
	}
	return calculatedScore;
}

module.exports = score;