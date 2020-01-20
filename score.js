function score(throwsArray){
	let calculatedScore = 0;
	if(throwsArray == undefined){
		return calculatedScore;
	}
	let firstThrow = true;
	for(let i=0;i<throwsArray.length;i++){
		if(!firstThrow){
			if(throwsArray[i]+throwsArray[i-1] < 10){
				calculatedScore = calculatedScore + throwsArray[i] + throwsArray[i-1];
			}
		}
		firstThrow=!firstThrow;
	}
	return calculatedScore;
}

module.exports = score;