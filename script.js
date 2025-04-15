const pickNumberBtn = document.getElementById("picknumber-button");
const lotterySheetContainer = document.getElementById("lotterysheetcontainer");
const resetBnt = document.getElementById("reset-button");
const result = document.getElementById("result");
const tick = new Audio("tap.wav");
const complete = new Audio("complete.wav");
let gifts = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
]

pickNumberBtn.addEventListener  ("click", function(){
  for (let i = 1; i <= 50; i++){
    document.getElementById(i).classList.remove("winning-box");
  }
  
  result.textContent = "Please wait....."; 

  let counter = 0;
  let intervald = setInterval(function(){
    tick.pause();
    tick.currentTime=0;
    tick.play();
    counter = counter + 1;
    let randomBox = Math.floor(Math.random() * 50) + 1;
    for (let i = 1; i <= 50 ; i++){
      if(i === randomBox){
        document.getElementById(i).classList.add("highlighted-box");
      }else{
        document.getElementById(i).classList.remove("highlighted-box");
      }
    }
    if(counter == 5){
      let randomNumber = Math.random() * 50;
      let drawnNumber = Math.floor(randomNumber + 1);
      result.textContent = `You have got ${drawnNumber} and You won ${gifts[drawnNumber - 1]}`;
      document.getElementById(randomBox).classList.remove("highlighted-box");
      document.getElementById(drawnNumber).classList.add("winning-box");
      complete.pause();
      complete.currentTime=0;
      complete.play();
      clearInterval(intervald);
    }
  }, 1000);
})

gifts.forEach(function(value, i){
  const boxElement = `<div class="box" id=${i + 1}>${i + 1}. ${value} </div>`;
  lotterySheetContainer.insertAdjacentHTML("beforeend",boxElement);
})