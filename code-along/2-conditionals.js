document.querySelector('.nom-nom-nom').addEventListener('click', (event) => {
  const dinner = document.querySelector('.dinner').value
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // The variable 'dinner' is already set to the value in the text input
 
let output
let quantity = 5


 if (dinner == 'tacos'){ 
  
  if(quantity > 3){
    output = 'too many'
  }else{
   output = 'yay'
  }
 } else if (dinner == 'broccoli'){
   output = 'meh'
 } else if (dinner == 'cookies'|| dinner == 'ice cream'){
   output = 'woah'
 } 
  else {
   output = 'sad'
 }

 

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
})