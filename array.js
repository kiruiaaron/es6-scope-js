
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"]

function colorDisplay(color, o){
			for(i=0; i<color.length; i++){
				if(i<3){
                    console.log(`${i+1}${o[i+1]} choice is ${color[i]}.`);
                }  else{
                    console.log(`${i+1}${o[0]} choice is ${color[i]}.`);

                }
                
			}
		}

		colorDisplay(color, o)