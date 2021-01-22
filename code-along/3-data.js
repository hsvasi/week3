// 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

// 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
 let profile = {
   name: 'Brian',
   location: { city: 'Chicago', state: 'Illinois' },
   timeline: [
     { icon: '🧠', when: '2020-10-26 17:00:00', what: 'Teaching MBA students how to code in JavaScript!' },
     { icon: '🌮', when: '2020-10-26 12:00:00', what: 'Eating tacos' },
     { icon: '🦄', when: '2020-10-26 08:00:00', what: 'Riding a unicorn' }
   ]
 }

/*let profile = {
  name: 'Hussain',
  location: 'Chicago',
  status: 'Kellogg Student!!'
}
let profile2 = {
  name: 'Brian',
  location: 'Chicago',
  status: 'teacher'
}

let shoppingList = ['eggs','orange juice', 'ice cream']
shoppingList.push ('lottery ticket')

let lotteryTicket = [4, 8,15,16,23,42]

let kiei451 = [profile, profile2]
console.log(profile.status)*/



//  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

// template literals support HTML too!
output = `
  <div class="text-4xl">${profile.timeline[1].what} at ${profile.timeline[1].when}</div>
`
/*
  this code does the work of writing the output to screen...
  so leave it alone :) this code expects a variable named
  'output' to be declared
*/
document.querySelector('.output').innerHTML = output