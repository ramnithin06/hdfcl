console.log("*****executing switch case funtion for score grade*******");

function runTests(score){

    switch(true){
        case (score >= 90):
            console.log('Student obtained more than 90 marks ... A grade ');
            break;
        case (score >= 80):
            console.log('Student obtained more than 80 marks ... B grade ');
            break;
        case (score >= 70):
            console.log('Student obtained more than 70 marks ... C grade ');
            break;
        default:
            console.log('Student obtained less than 70 marks ... Default D grade ');
            break;
}
}
let score = 60;
runTests(score);