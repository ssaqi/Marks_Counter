const calcy = () =>{
   let wd = document.getElementById('wd').value;
   let math = document.getElementById('math').value;
   let js = document.getElementById('js').value;
   let cs = document.getElementById('cs').value;
  let grade = "";
  let total= parseFloat(wd)+ parseFloat(math)+ parseFloat(js)+ parseFloat(cs);
  alert("you total marks out of 400 is :: "+ total);
   
  let percentage = (total/400)*100;
  alert(percentage+"%");

  if(percentage <= 100 && percentage >= 80){
    grade = "A";
  }else if(percentage <=79 && percentage >=60){
      grade = "B";
  }else if (percentage <=59 && percentage >=40){
      grade = "C";
  }else{
    grade="F";
  }

//there we are using Template string --esc button k neche wala button 
if(percentage >= 39.5){
  document.getElementById('showdata').innerHTML = ` Out of 400 your total mark is ${total} and Your percentage is 
  ${percentage}%. <br/> Your grade is ${grade}.You are Pass` 
}
else{
  document.getElementById('showdata').innerHTML = ` Out of 400 your total mark is ${total} and Your percentage is 
  ${percentage}%. <br/> Your grade is ${grade}.You ara Fail`
}


}
