// Q1
document.getElementById("text").innerHTML="document.getElementById(text)";

// Q2>>>>>>>>>>>>>>>
var a = document.getElementsByTagName("h1")
a[0].innerHTML="document.getElementsByTagName(h1)"

// Q3>>>>>>>>>>>>>>>>>>>>>
var b=document.getElementsByClassName("box1")
b[0].innerHTML="document.getElementsByClassName(box)";

// Q4>>>>>>>>>>>>>>>>>>>>>>>>
document.getElementById("changeword").innerHTML=changeword.innerHTML +"="+ "Hello world"

// Q5>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
document.getElementById("changehello").innerHTML="Hello World"
function changeme(){
    document.getElementById("changehello").innerHTML="Elevation academy"  
}

// Q6>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 let z=document.getElementById("heading")
 z.innerHTML="Hello"
 z.style.color="black"

//  document.getElementById("heading").style.color="red"

function color(){
    if( z.style.color=="black"){
        z.style.color="red"

    }
    else{
        z.style.color="black"
    }
}


//  Q7>>>>>>>>>>>>>>>>>>>>>>>>>>
let column= document.getElementById("parent")
column.style.flexDirection="row"

function flexchange(){
    if(column.style.flexDirection=="row"){
        column.style.flexDirection="column"
    }
    else{
        column.style.flexDirection="row"

    }
    }
// document.getElementById("parent")




// Q8>>>>>>>>>>>>>>>>>>






// Q9>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function clock(){
    var time= new Date().toLocaleTimeString();
    document.getElementById("clocktime").innerHTML= time
}
setInterval(()=>{
    clock()
},1000)

// getElementById("clocktime");
// function clock(){
//     let time = new Date();
//     let hrs = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     let AMPM =" ";

// setInterval(()=>{
//     clock();
// },1000)

// if (hrs>12){
//     hrs=-12
//     AMPM="PM"
// }
// else if (hrs==12){
//      AMPM="PM"
// }
// else{
//     AMPM="AM"
// }
// document.getElementById("clocktime").textContent=`${hrs}hours`
// document.getElementById("clocktime").textContent=`${min}minute`
// document.getElementById("clocktime").textContent=`${sec}second`
// }
