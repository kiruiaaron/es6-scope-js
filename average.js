let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

let marks = 0;

for (let i=0; i < students.length; i++) {
        marks += students[i][1];
        
}
let average = marks/students.length;
console.log(`${average} is the average grade`);

        if (average < 60){
          console.log("Grade : F");      
          } 
        else if (average < 70) {
                console.log("Grade : D"); 
                  } 
        else if (average < 80) 
             {
                console.log("Grade : C"); 
        } else if (average < 90) {
                console.log("Grade : B"); 
        } else if (average < 100) {
                console.log("Grade : A"); 
}
