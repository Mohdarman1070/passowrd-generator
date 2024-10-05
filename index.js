const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset = "abcdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const symbol = "`!@#$%^&*()/*-"


  




const passbox = document.getElementById("placehold");
const totalchar = document.getElementById("total-char");
const lowerinput = document.getElementById("lower-case");
const upperinput = document.getElementById("upper-case");
const num = document.getElementById("numbers");
const sym = document.getElementById('symbols')

const pass = document.getElementById("pass")





const getrandomdata = (dataSet) =>{
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}






const generatePassword = (password = "") =>{

    if(lowerinput.checked){
        password += getrandomdata(lowerset);
    }

    if(upperinput.checked){
        password += getrandomdata(upperset);
    }
    if(num.checked){
        password += getrandomdata(number);
    }
    if(sym.checked){
        password += getrandomdata(symbol);
    }
    if(password.length < totalchar.value){
        return generatePassword(password)
    }
    
     if(totalchar.value > 20 || totalchar.value < 1){
        pass.innerText = "choose number between 0 and 21 only"
        pass.style.color = "red" 
         return " "

     }   
     
     if(totalchar.value > 0 || total.value < 21){
        pass.style.color = "gray"
     }

     
     


    pass.innerText = truncateString(password, totalchar.value);

}
// generatePassword();

 



document.getElementById("generate").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)






function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
