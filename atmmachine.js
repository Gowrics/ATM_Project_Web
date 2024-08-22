
const accdetails = {Accno:12345670,name:'Gowri', Amount:20000}
//accdetails.Amount=accamount
localStorage.setItem('bname',accdetails.name);     
localStorage.setItem('baccno',accdetails.Accno);     

alert("Please enter the Acc no :"+accdetails.Accno);
//--------------atmmhin
function check_acc(){            
  var accid=document.getElementById('pinum').value;
       if (accid!=accdetails.Accno){
        alert("You enter wrong Account number");
       }
       else{
        // Redirect to the second page
        window.location.href = "atmmachin1.html";
     }
}   

document.getElementById("nam").innerHTML=accdetails.name;
document.getElementById("ano").innerHTML=accdetails.Accno;



function widthdraw(){   //withdraw fun
  window.location.href="atmwithdraw.html";
}

function deposite(){   //withdraw fun
  window.location.href="atmdeposite.html";
}
function balance(){   //withdraw fun
  window.location.href="atmbalance.html";
}   
function quit(){   //withdraw fun
    window.location.href="index.html";
}
  

//----------------trans--------  document.getElementById("fun").innerHTML="err";
var accamount;
var amnt;
function calc(){
     amnt =document.getElementById("eamount").value;
     accamount=accdetails.Amount-amnt;
     alert(" balance :"+accamount);
     window.location.href="atmmachin1.html";    
accdetails.Amount=accamount;
localStorage.setItem('balance',accamount); 
window.location.href = "atmbalance.html";
}
function calc1(){
    amnt =document.getElementById("damount").value;
   accamount=accdetails.Amount+parseInt(amnt);
   alert(" balance :"+accamount);
  window.location.href="atmmachin1.html";
  accdetails.Amount=accamount;
localStorage.setItem('balance',accamount); 
window.location.href = "atmbalance.html";
}

