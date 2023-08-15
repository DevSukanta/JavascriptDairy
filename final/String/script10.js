// and or operator 
 let firstName = "Sukanta";
 let age = 29;
 
 if(firstName[0] === "S"){
    console.log("Name starts with S");
 }
 if(age > 18){
    console.log("You are above 18");
 }
 
//  And operator 
// Both of conditon needs to true 
 if(firstName[0] === "S" && age>18){
    console.log("The name starts with S and age is above 18")
 }else{
    console.log("Information is incorrect");
 }

//  Or operator 
// Only one condition needs to true 
 if(firstName[0] === "S" || age>18){
    console.log("The name starts with S and age is above 18")
 }else{
    console.log("Information is incorrect");
 }