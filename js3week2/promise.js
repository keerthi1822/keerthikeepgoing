// fetch('https://yesno.wtf/api')
// .then(response => response.json())
//         .then((battery) => {

//             console.log(battery.answer);
//         });

    //   console.log(navigator.getBattery());

      navigator.getBattery().then((batterystatus)=>{
           console.log(batterystatus.level);
        }).then(()=>fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'))//returns promise
        .then(response => response.json())//returns promise
        .then((movies)=>{
            console.log(Array.isArray(movies));
        }
    )

    // //exersice 2
    // const afterFourSeconds =  new Promise((resolve)=>{

    //     setTimeout(()=>{
    //         resolve('hello, after 4 seconds');
    //     },4000);
    // })

    // .then((msg)=>{
    //     console.log(msg);

    // })

    // //2
    // const afterTwoSeconds =  new Promise((resolve)=>{

    //     setTimeout(()=>{
    //         resolve(' after 2 seconds');
    //     },2000);
    // })

    // .then((msg)=>{
    //     console.log(msg);

    // })

    // //3

    // const giveAlert =  new Promise((resolve)=>{

    //         resolve('hello,here is an alert');
        
    // })

    // .then((msg)=>{
    //    alert(msg);

    // })