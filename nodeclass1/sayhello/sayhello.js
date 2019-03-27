sayHello = (name)=>
 console.log(`Hello ${name}`);
setTimeout(sayHello,1000,"keerthi");

//print time every minute

printTime = ()=>{
    let time = new Date();
    console.log(time.getSeconds());
}

setInterval(printTime,1000);