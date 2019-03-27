function hoursToSeconds( hours, minutes,seconds){
    let secondsfromhours=(hours*60*60)+(minutes*60)+seconds;
    return secondsfromhours;
}
let h=4;
let m=45;
let s=23;
let sec=hoursToSeconds( h, m, s);
console.log("total seconds of "+h +" hours "+m+ " minutes"+s+"seconds is "+ sec);