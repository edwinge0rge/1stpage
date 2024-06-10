// writw aprogram to find the given number is positive or not,if == 0,neither postover nor negative

var temp=0

if (temp<0) {
 console.log(`number is postive`);   
}
else if(temp==0){
    console.log(`number is neither postive or negative`);
}
else{
    console.log(`number is negative`);
}

// another method

num=100

console.log(num>0?`postive`:num==0?`neither posive or negative`:`negative`);