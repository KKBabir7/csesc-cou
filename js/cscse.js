     
var gra	= {
    "A+": 4.00,
    "A": 3.75,
    "A-": 3.50,
    "B+": 3.25,
    "B": 3.00,
    "B-": 2.75,
    "C+": 2.50,
    "C": 2.25,
    "D": 2.00,
    "F": 0
};	
document.querySelectorAll(".allinputsoluation").forEach(element => {
   element.addEventListener('input',(e)=>{
      const regex = /[A-Za-z/+/-]/;
      const chars = e.target.value.split('');
      const char = chars.pop();
      if (!regex.test(char)) {
         e.target.value = chars.join('');
         console.log(`${char} is not a valid character.`);
      }
   })
});
document.querySelectorAll(".allinputsoluation").forEach((element)=>{
   element.addEventListener("keyup",(e)=>{
      let el = e.target;
      let start = el.selectionStart;
      let end = el.selectionEnd;
      el.value = el.value.toUpperCase();
      el.setSelectionRange(start, end);
   });
})
   



const fastresult=document.getElementById('fastresult')
fastresult.addEventListener('click',()=>getfst1())	
const getfst1=()=>{  
      const creditNumber=document.querySelectorAll('.fst1')
      const inputresult=document.querySelectorAll(".fstin1");
      const inputfildermg=document.getElementById('fstshow1')
      const tcredir=document.querySelector('.tcradit').innerHTML
      const allCreditNumber=[]
      const allInputresult=[]
      for(let c=0;c<creditNumber.length;c++){
         allCreditNumber.push(creditNumber[c].innerHTML)
      }
      for(let ir=0;ir<inputresult.length;ir++){
         if(inputresult[ir].value==''){
            document.getElementById('modalcontenshow').innerHTML='Please Fill Up The 1ST Semester Input field By The Your Grade Points'
            $('#f_1').modal('show')
            break;
         }
         else if(!(inputresult[ir].value=='')){
            $('#f_1').modal('hide')
            allInputresult.push(inputresult[ir].value)
         }
      } 
      let finalResult=0
      for(let fr=0;fr<allCreditNumber.length;fr++){
         finalResult+=((Number(allCreditNumber[fr])*gra[allInputresult[fr]]));
      }  
      const totatresult=(finalResult/Number(tcredir)).toFixed(2)
     
      if(isNaN(totatresult)){
        inputfildermg.innerHTML='Input Empty'; 
      }
      if(!isNaN(totatresult)) {
        inputfildermg.innerHTML=totatresult
         return (totatresult*Number(tcredir)).toFixed(2) 
      }
      
     
}


const fastresult2=document.getElementById('fastresult2')
fastresult2.addEventListener('click',()=>getfst2())	
const getfst2=()=>{  
      const creditNumber=document.querySelectorAll('.fst2')
      const inputresult=document.querySelectorAll(".fstin2");
      const inputfildermg=document.getElementById('fstshow2')
      const tcredir=document.querySelector('.tcradit2').innerHTML
      const allCreditNumber=[]
      const allInputresult=[]
      for(let c=0;c<creditNumber.length;c++){
         allCreditNumber.push(creditNumber[c].innerHTML)
      }
      for(let ir=0;ir<inputresult.length;ir++){
        if(inputresult[ir].value==''){
            document.getElementById('modalcontenshow').innerHTML='Please Fill Up The 2ND Semester Input field By The Your Grade Points'
            $('#f_1').modal('show')
            break;
         }
         else if(!(inputresult[ir].value=='')){
            $('#f_1').modal('hide')
            allInputresult.push(inputresult[ir].value)
         }
      } 
      let finalResult=0
      for(let fr=0;fr<allCreditNumber.length;fr++){
         finalResult+=((Number(allCreditNumber[fr])*gra[allInputresult[fr]]));
      }  
      const totatresult=(finalResult/Number(tcredir)).toFixed(2)
     
      if(isNaN(totatresult)){
        inputfildermg.innerHTML='Input Empty'; 
      }
      if(!isNaN(totatresult)) {
        inputfildermg.innerHTML=totatresult
        return (totatresult*Number(tcredir)).toFixed(2) 
      }
      
     
}



const secresult1=document.getElementById('secresult1')
secresult1.addEventListener('click',()=>getsec1())	
const getsec1=()=>{  
      const creditNumber=document.querySelectorAll('.sec1')
      const inputresult=document.querySelectorAll(".secin1");
      const inputfildermg=document.getElementById('secshow1')
      const tcredir=document.querySelector('.tcredites1').innerHTML
      const allCreditNumber=[]
      const allInputresult=[]
      for(let c=0;c<creditNumber.length;c++){
         allCreditNumber.push(creditNumber[c].innerHTML)
      }
      for(let ir=0;ir<inputresult.length;ir++){
        if(inputresult[ir].value==''){
            document.getElementById('modalcontenshow').innerHTML='Please Fill Up The Third Semester Input field By The Your Grade Points'
            $('#f_1').modal('show')
            break;
         }
         else if(!(inputresult[ir].value=='')){
            $('#f_1').modal('hide')
            allInputresult.push(inputresult[ir].value)
         }
      } 
      let finalResult=0
      for(let fr=0;fr<allCreditNumber.length;fr++){
         finalResult+=((Number(allCreditNumber[fr])*gra[allInputresult[fr]]));
      }  
      const totatresult=(finalResult/Number(tcredir)).toFixed(2)
     
      if(isNaN(totatresult)){
        inputfildermg.innerHTML='Input Empty'; 
      }
      if(!isNaN(totatresult)) {
        inputfildermg.innerHTML=totatresult
        return (totatresult*Number(tcredir)).toFixed(2) 
      }
      
}




const secresult2=document.getElementById('secresult2')
secresult2.addEventListener('click',()=>getsec2())	
const getsec2=()=>{  
      const creditNumber=document.querySelectorAll('.sec2')
      const inputresult=document.querySelectorAll(".secin2");
      const inputfildermg=document.getElementById('secshow2')
      const tcredir=document.querySelector('.tcredites2').innerHTML
      const allCreditNumber=[]
      const allInputresult=[]
      for(let c=0;c<creditNumber.length;c++){
         allCreditNumber.push(creditNumber[c].innerHTML)
      }
      for(let ir=0;ir<inputresult.length;ir++){
        if(inputresult[ir].value==''){
            document.getElementById('modalcontenshow').innerHTML='Please Fill Up The Fourth Semester Input field By The Your Grade Points'
            $('#f_1').modal('show')
            break;
         }
         else if(!(inputresult[ir].value=='')){
            $('#f_1').modal('hide')
            allInputresult.push(inputresult[ir].value)
         }
      } 
      let finalResult=0
      for(let fr=0;fr<allCreditNumber.length;fr++){
         finalResult+=((Number(allCreditNumber[fr])*gra[allInputresult[fr]]));
      }  
      const totatresult=(finalResult/Number(tcredir)).toFixed(2)
     
      if(isNaN(totatresult)){
        inputfildermg.innerHTML='Input Empty'; 
      }
      if(!isNaN(totatresult)) {
        inputfildermg.innerHTML=totatresult
        return (totatresult*Number(tcredir)).toFixed(2) 
      }
      
}



const trdresult1=document.getElementById('trdresult1')
trdresult1.addEventListener('click',()=>gettrd1())	
const gettrd1=()=>{  
      const creditNumber=document.querySelectorAll('.trd1')
      const inputresult=document.querySelectorAll(".trdin1");
      const inputfildermg=document.getElementById('trdshow1')
      const tcredir=document.querySelector('.tcredittrd1').innerHTML
      const allCreditNumber=[]
      const allInputresult=[]
      for(let c=0;c<creditNumber.length;c++){
         allCreditNumber.push(creditNumber[c].innerHTML)
      }
      for(let ir=0;ir<inputresult.length;ir++){
        if(inputresult[ir].value==''){
            document.getElementById('modalcontenshow').innerHTML='Please Fill Up The Fifth Semester Input field By The Your Grade Points'
            $('#f_1').modal('show')
            break;
         }
         else if(!(inputresult[ir].value=='')){
            $('#f_1').modal('hide')
            allInputresult.push(inputresult[ir].value)
         }
      } 
      let finalResult=0
      for(let fr=0;fr<allCreditNumber.length;fr++){
         finalResult+=((Number(allCreditNumber[fr])*gra[allInputresult[fr]]));
      }  
      const totatresult=(finalResult/Number(tcredir)).toFixed(2)
     
      if(isNaN(totatresult)){
        inputfildermg.innerHTML='Input Empty'; 
      }
      if(!isNaN(totatresult)) {
        inputfildermg.innerHTML=totatresult
        return (totatresult*Number(tcredir)).toFixed(2) 
      }   
}




const trdresult2=document.getElementById('trdresult2')
trdresult2.addEventListener('click',()=>gettrd2())	
const gettrd2=()=>{  
      const creditNumber=document.querySelectorAll('.trd2')
      const inputresult=document.querySelectorAll(".trdin2");
      const inputfildermg=document.getElementById('trdshow2')
      const tcredir=document.querySelector('.tcredittrd2').innerHTML
      const allCreditNumber=[]
      const allInputresult=[]
      for(let c=0;c<creditNumber.length;c++){
         allCreditNumber.push(creditNumber[c].innerHTML)
      }
      for(let ir=0;ir<inputresult.length;ir++){
        if(inputresult[ir].value==''){
            document.getElementById('modalcontenshow').innerHTML='Please Fill Up The Sixth Semester Input field By The Your Grade Points'
            $('#f_1').modal('show')
            break;
         }
         else if(!(inputresult[ir].value=='')){
            $('#f_1').modal('hide')
            allInputresult.push(inputresult[ir].value)
         }
      } 
      let finalResult=0
      for(let fr=0;fr<allCreditNumber.length;fr++){
         finalResult+=((Number(allCreditNumber[fr])*gra[allInputresult[fr]]));
      }  
      const totatresult=(finalResult/Number(tcredir)).toFixed(2)
     
      if(isNaN(totatresult)){
        inputfildermg.innerHTML='Input Empty'; 
      }
      if(!isNaN(totatresult)) {
        inputfildermg.innerHTML=totatresult
        return (totatresult*Number(tcredir)).toFixed(2) 
      }   
}





const foresult1=document.getElementById('foresult1')
foresult1.addEventListener('click',()=>getfo1())	
const getfo1=()=>{  
      const creditNumber=document.querySelectorAll('.fo1')
      const inputresult=document.querySelectorAll(".foin1");
      const inputfildermg=document.getElementById('foshow1')
      const tcredir=document.querySelector('.tcreditfo1').innerHTML
      const allCreditNumber=[]
      const allInputresult=[]
      for(let c=0;c<creditNumber.length;c++){
         allCreditNumber.push(creditNumber[c].innerHTML)
      }
      for(let ir=0;ir<inputresult.length;ir++){
        if(inputresult[ir].value==''){
            document.getElementById('modalcontenshow').innerHTML='Please Fill Up The Seventh Semester Input field By The Your Grade Points'
            $('#f_1').modal('show')
            break;
         }
         else if(!(inputresult[ir].value=='')){
            $('#f_1').modal('hide')
            allInputresult.push(inputresult[ir].value)
         }
      } 
      let finalResult=0
      for(let fr=0;fr<allCreditNumber.length;fr++){
         finalResult+=((Number(allCreditNumber[fr])*gra[allInputresult[fr]]));
      }  
      const totatresult=(finalResult/Number(tcredir)).toFixed(2)
     
      if(isNaN(totatresult)){
        inputfildermg.innerHTML='Input Empty'; 
      }
      if(!isNaN(totatresult)) {
        inputfildermg.innerHTML=totatresult
        return (totatresult*Number(tcredir)).toFixed(2) 
      }   
}





const foresult2=document.getElementById('foresult2')
foresult2.addEventListener('click',()=>getfo2())	
const getfo2=()=>{ 
      const creditNumber=document.querySelectorAll('.fo2')
      const inputresult=document.querySelectorAll(".foin2");
      const inputfildermg=document.getElementById('foshow2')
      const tcredir=document.querySelector('.tcreditfo2').innerHTML
      const allCreditNumber=[]
      const allInputresult=[]
      for(let c=0;c<creditNumber.length;c++){
         allCreditNumber.push(creditNumber[c].innerHTML)
      }
      for(let ir=0;ir<inputresult.length;ir++){
        if(inputresult[ir].value==''){
            document.getElementById('modalcontenshow').innerHTML='Please Fill Up The Eighth Semester Input field By The Your Grade Points'
            $('#f_1').modal('show')
            break;
         }
         else if(!(inputresult[ir].value=='')){
            $('#f_1').modal('hide')
            allInputresult.push(inputresult[ir].value)
         }
      } 
      let finalResult=0
      for(let fr=0;fr<allCreditNumber.length;fr++){
         finalResult+=((Number(allCreditNumber[fr])*gra[allInputresult[fr]]));
      }  
      const totatresult=(finalResult/Number(tcredir)).toFixed(2)
     
      if(isNaN(totatresult)){
        inputfildermg.innerHTML='Input Empty'; 
      }
      if(!isNaN(totatresult)) {
        inputfildermg.innerHTML=totatresult
        return (totatresult*Number(tcredir)).toFixed(2) 
      }   
     
}







const fainalresult=document.getElementById('fainalresult')
fainalresult.addEventListener('click',()=>getfres())	
const getfres=()=>{
   const dv=document.querySelectorAll(".allinputsoluation")
    const cgpacount=document.getElementById('cgpa_score')
    const fail=[]
   for(let v=0;v<dv.length;v++){
      if(dv[v].value==''){
          document.getElementById('modalcontenshow').innerHTML='Please Fill Up The All Semester Input field By The Your Grade Points'
          $('#f_1').modal('show')
          cgpacount.innerHTML='Input Empty'; 
          break;
       }
      
       else {
         const totalcgpa=((Number(getfst1())+Number(getfst2())+Number(getsec1())+Number(getsec2())+Number(gettrd1())+Number(gettrd2())+Number(getfo1())+Number(getfo2()))/160).toFixed(2)
            if(isNaN(totalcgpa)){
               cgpacount.innerHTML='Input Empty'; 
            }
             if(!isNaN(totalcgpa)){
               cgpacount.innerHTML=totalcgpa;
             } 
             if(dv[v].value=='F'){
               fail.push(dv[v].value)
                document.getElementById('modalcontenshow').innerHTML=`Your Have ${fail.join('').length} Fail Subject`

                setTimeout(()=>{
                   $('#f_1').modal('show')
                },16000)
                
              }
             if((totalcgpa>=2.00) && (fail.length==0)){
                 const discons=document.getElementById('congratstem')
                 discons.style.display='block'
                 document.getElementById('enterfainal').innerHTML=totalcgpa
                 setTimeout(()=>{
                  discons.style.display='none'
                 },15000)
             }
            
            

              
       }
    } 
  
}