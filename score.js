function score(throwsArray){
	let calculatedScore = 0;       //Stores the score of the player
	if(throwsArray == undefined){    //If no argument is passed, return the default(0)
		return calculatedScore;
	}
	let firstThrow = true;         //Tracks whether the current throw is the first or second throw of the frame
	let turnNumber = 0;             //Tracks the frame number
	for(let i=0;i<throwsArray.length;i++){   //Traverse through the array and calculate the score
		if(turnNumber==10){      //Stop counting score after 10 frames
			break;
		}
		checkCase(i);
	}
	function checkCase(i){
		if(!firstThrow){    //Check if it is the second throw of the frame
			if(throwsArray[i]+throwsArray[i-1] < 10){   //Case when it is not a spare
				calculatedScore = calculatedScore + throwsArray[i] + throwsArray[i-1];
				turnNumber ++;
			}
			else{         //Case when it is a spare
				calculatedScore = calculatedScore + throwsArray[i+1] + throwsArray[i] + throwsArray[i-1];
				turnNumber++;
			}
			firstThrow=!firstThrow;    //Change the tracker back to first throw 
		}
		else{           //Check if it is the first throw of the frame
			if(throwsArray[i] == 10){   //Case when it is a strike
				calculatedScore = calculatedScore + throwsArray[i] + throwsArray[i+1] + throwsArray[i+2];
				turnNumber++;
                
			}
			else{           //If not a strike, change tracker to second throw
				firstThrow=!firstThrow;
			}
		}
		
	}
	return calculatedScore;
}

module.exports = score;