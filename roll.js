let throwsArr = [];     //Holds the number of pins fallen after each throw
function roll(numOfPins){
	throwsArr.push(numOfPins);  //Push the pins after each throw
	return throwsArr;       //Return the throws array
}

module.exports = roll;