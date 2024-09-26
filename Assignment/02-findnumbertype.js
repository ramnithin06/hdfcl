function findnumbertype(inputnum){
   let result = inputnum%2;
if(inputnum > 0){
    console.log("inputnumber is positive");
}
else if(inputnum < 0){
    console.log("inputnumber is Negative");
}
else if(inputnum == 0){
    console.log("inputnumber is zero");
}
else {
    console.log("unsupported number");
}

}

let inputnumber = 0;
findnumbertype(inputnumber);