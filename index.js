function Digital_clock (){
     let a=new Date();
     let hour=a.getHours();
     let minute=a.getMinutes();
     let second=a.getSeconds();
     let session="AM";

     if(hour===0) {
          hour=12;
     }
     if(hour>12) {
         hour=hour-12;
         session="PM";
     }
    
     let time=hour+":"+minute+":"+second+":"+session;
     let clock=document.getElementById('dc');
     clock.innerText=time;
     setInterval(function(){
        Digital_clock();   
     },1000)
    
}
Digital_clock();





