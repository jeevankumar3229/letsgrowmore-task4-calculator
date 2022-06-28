let string=" ";
let buttons=document.querySelectorAll('.button');
let buttonss=document.querySelectorAll('.button1');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string=string + e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})
Array.from(buttonss).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML== 'C'){
            string=" ";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string=string + e.target.innerHTML;
            document.querySelector('input').value=string;
            }
    })
})