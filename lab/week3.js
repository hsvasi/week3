// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

let numberOfProducts        // expects a Number
let products                // expects an Array of product data
let promotion1Description   // expects a String describing the promotion
let promotion2Description   // expects a String describing the promotion
let promotion3Description   // expects a String describing the promotion
let promotion1Icon          // expects a String (emoji)
let promotion2Icon          // expects a String (emoji)
let promotion3Icon          // expects a String (emoji)

// The `database` variable is an existing object that contains our products database.
// The variables at the top of this code will be used to create the UI for the page.
// Fill in their values; e.g. set a value to `numberOfProducts` and it will appear on the page.

// promotion1-3 are variables representing randomized promotions at the top of the page.
// These promotions should change with every page load – assume we don't know the number
// of promotions in the database. Duplicates are ok.
// Promotions should be displayed with a corresponding icon.
// - 🚛 for shipping
// - 🤑 for discount
// - 🎰 for contest

// HINTS
// - Use Array.length to determine the total number of products/promotions in the database
// - To generate a random number between 0 and x in Javascript, use our
//   getRandomInt() function and pass it x (note that it's inclusive of both 0 and x).

function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
   numberOfProducts = database.products.length
   products = database.products
   
   let promotionSize = database.promotions.length - 1
   console.log(promotionSize)

   let promotion1postion = getRandomInt(promotionSize)
   let promotion2postion = getRandomInt(promotionSize)
   let promotion3postion = getRandomInt(promotionSize)
   

   console.log(promotion1postion)
   console.log(promotion2postion)
   console.log(promotion3postion)

   promotion1Description = database.promotions[promotion1postion].description
   promotion2Description = database.promotions[promotion2postion].description
   promotion3Description = database.promotions[promotion3postion].description
   
   console.log(promotion1Description)
   console.log(promotion2Description)
   console.log(promotion3Description)


  if (database.promotions[promotion1postion].type == "discount"){
    promotion1Icon = "DISCOUNT!! "
  }else if(database.promotions[promotion1postion].type == "shipping"){
    promotion1Icon = "SHIPPING!! "
  }else if(database.promotions[promotion1postion].type == "contest"){
    promotion1Icon = "CONTEST!! "
  }else{

  }

  if (database.promotions[promotion2postion].type == "discount"){
    promotion2Icon = "DISCOUNT!! "
  }else if(database.promotions[promotion2postion].type == "shipping"){
    promotion2Icon = "SHIPPING!! "
  }else if(database.promotions[promotion2postion].type == "contest"){
    promotion2Icon = "CONTEST!! "
  }else{

  }

  if (database.promotions[promotion3postion].type == "discount"){
    promotion3Icon = "DISCOUNT!! "
  }else if(database.promotions[promotion3postion].type == "shipping"){
    promotion3Icon = "SHIPPING!! "
  }else if(database.promotions[promotion3postion].type == "contest"){
    promotion3Icon = "CONTEST!! "
  }else{

  }



  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  console.log(database)

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}