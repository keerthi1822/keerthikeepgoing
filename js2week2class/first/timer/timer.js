//Implementing timer as a packaged script

function createTimer(times, tick, onTick, finish){
    debugger;
    let count = 0;
    const id = setInterval(() =>{
        count++;
        onTick();
        if(count == times){
            clearInterval(id);
            finish();
        }
    }, tick);
}

let i = 20;

const eachTime = () =>{
    console.log(i);
    i--;
}

const onFinish = () => {
    console.log("Finished")
}

createTimer(20, 300, eachTime, onFinish)