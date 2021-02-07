
let btnPlus=document.getElementById("btnPlus");
let btnMinus=document.getElementById("btnMinus");
let btnTimes=document.getElementById("btnTimes");
let btnDivide=document.getElementById("btnDivide");
let btnPower=document.getElementById("btnPower");
let display=document.getElementById("display");
let btnClear=document.getElementById("btnClear");
let btnEqual= document.getElementById("btnEqual");
let btnPlusMinus=document.getElementById("btnPlusMinus");
let btnPoint=document.getElementById("btnPoint");
let btnNumber=document.querySelectorAll(".btnNumber");
let btnClearEntry= document.getElementById("btnClearEntry");

let num1, num2, result;
let operation ="";

btnClear.addEventListener("click", (e)=>{
    display.textContent= "0";
});

btnPlusMinus.addEventListener("click", (e)=>{
    display.innerHTML= display.innerHTML*-1;
})

btnClearEntry.addEventListener("click", (e)=>{
    let len=display.textContent.length;
    if(len>1){
        display.textContent=display.textContent.substr(0, len -1);
    } else{
        display.textContent ="0";
    }
})

btnNumber.forEach((number) =>{
    number.addEventListener("click", (e)=>{
        if(display.textContent =="0"){
            display.textContent =e.target.textContent;
        } else{
            display.textContent +=e.target.textContent;
        }
    });
});

btnNumber.forEach((number) =>{
    number.addEventListener("keydown", (e)=>{
        if(display.textContent =="0"){
            display.textContent =e.target.textContent;
        } else{
            display.textContent +=e.target.textContent;
        }
    });
});

btnPower.addEventListener("click", (e)=>{
    num1=Number(display.textContent);
    display.textContent="0"
    operation="**"
})

btnPlus.addEventListener("click", (e)=>{
num1=Number(display.textContent)
display.textContent="0"
operation="+";
});

btnMinus.addEventListener("click", (e)=>{
    num1=Number(display.textContent)
    display.textContent="0"
    operation="-";
    });
btnTimes.addEventListener("click", (e)=>{
        num1=Number(display.textContent)
        display.textContent="0"
        operation="*";
});

btnDivide.addEventListener("click", (e)=>{
    num1=Number(display.textContent)
    display.textContent="0"
    operation="/";
});

// btnPoint.addEventListener("click", (e)=>{
//     if(textContent >1){
// display.textContent= "0";
//     } else{
//         display.textContent=".";
//     }
// });

btnEqual.addEventListener("click", (e)=>{
    num2=Number(display.textContent)

    switch(operation){
        case"+":
        result=num1+num2;
        break;
        case"-":
        result=num1-num2;
        break;
        case"*":
        result=num1*num2;
        break;
        case"/":
        result=num1/num2;
        break;
        case"**":
        result=num1**num2;
        break;
    }
    display.textContent=result;
});


