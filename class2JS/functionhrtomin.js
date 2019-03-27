function hoursToMInutes( hours, minutes){
    let minutesfromhours=(hours*60)+(minutes);
    return minutesfromhours;
}
let h=4;
let m=45;
let min=hoursToMInutes( h, m);
console.log("total minutes of "+h +" hours "+m+ " minutes is"+ min);



