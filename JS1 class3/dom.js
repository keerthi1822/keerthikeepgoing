

function myData(){

    console.log("I am here i JS");
    let h1element=document.createElement('h1');
    h1element.innerHTML='Keerthi';
    document.body.appendChild(h1element);
    let pElement=document.createElement('p');
   pElement.innerHTML='This is Keerthi. I am from India.';
   document.body.appendChild(pElement);

}
myData();