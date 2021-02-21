const HondaRebel500 = document.getElementById("dispRebel500");
const ZeroS = document.getElementById('dispZeroS');
const Peugeot208 = document.getElementById("dispPeugeot208");
const Fiat500 = document.getElementById('dispFiat500');
const ToyotaYaris = document.getElementById("dispToyotaYaris");
const Hyendaii20 = document.getElementById('dispHyendaii20');
const MiniCooper = document.getElementById("dispMiniCooper");
const Mazda3 = document.getElementById('dispMazda3');
const VwGolf = document.getElementById("dispVwGolf");
const HyendaiSonata = document.getElementById('dispHyendaiSonata');
const MercedesCClass = document.getElementById("dispMercedesCClass");
const Bmw7Series = document.getElementById('dispBmw7Series');
const MercedesCitan = document.getElementById("dispMercedesCitan");
const MercedesAxor = document.getElementById('dispMercedesAxor');
const Engine1 = document.getElementById('dispEngine1');
const Engine2 = document.getElementById('dispEngine2');


const contactpopup = document.getElementById("contactpopup");

const fname = document.getElementById("fname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submitcontact = document.getElementById("submitcontact");



const fivePopup = document.getElementById("fivePopup");
const submitpayment =document.querySelectorAll("#submitpayment");
const popupnet = document.getElementById("popupnet");

const closerepopup= document.getElementById("closerepopup");
const closerectpopup= document.getElementById("closerectpopup");




let total;

fivePopup.style.display = "none";
contactpopup.style.display = "none";

function showRes(Vehicle) {
 document.querySelectorAll('.five').forEach(five => {
  five.style.display = 'none'
 })
 Vehicle.style.display = 'flex'

 document.querySelector('#Reservation').style.display = 'none'
}




document.querySelectorAll('.days').forEach(day => {
 day.onchange = () => {
  let ppd = day.parentElement.parentElement.querySelector('#priceperday1')
  let dayCount = day.value
  let totalPrice = day.parentElement.parentElement.querySelector('#netpricee')
 

  totalPrice.textContent = (parseFloat(ppd.textContent) * dayCount).toFixed(2)
  total = totalPrice.textContent;
  popupnet.innerHTML = total;
 }
});

console.log(submitpayment);

function allBtn(e){
 submitpayment[e].addEventListener("click", function (){
 
  fivePopup.style.display = "flex"; 
  fivePopup.style.width = "50%";
  fivePopup.style.margin = "auto";
  fivePopup.style.left = "460px";
  fivePopup.style.overflowX = "hidden";
  fivePopup.style.justifyContent = "center";
  fivePopup.style.position = "absolute";
  fivePopup.style.top = "3790px";
  fivePopup.style.backgroundImage = "none";
  fivePopup.style.color = "white";
  fivePopup.style.backgroundColor = "#292929";       
 })
}

closerepopup.addEventListener("click" , function(){
 fivePopup.style.display = "none";
})


submitcontact.addEventListener("click", function (){

 var fnameo = document.getElementById("fnameo").innerHTML = fname.value;
 var emailo = document.getElementById("emailo").innerHTML = email.value;
 var subjecto = document.getElementById("subjecto").innerHTML = subject.value;
 var messageo = document.getElementById("messageo").innerHTML = message.value;
 
 contactpopup.style.display = "flex"; 
 contactpopup.style.width = "50%";
 contactpopup.style.margin = "auto";
 contactpopup.style.left = "460px";
 contactpopup.style.overflowX = "hidden";
 contactpopup.style.justifyContent = "center";
 contactpopup.style.position = "absolute";
 contactpopup.style.top = "4910px";
 contactpopup.style.backgroundImage = "none";
 contactpopup.style.color = "white";
 contactpopup.style.backgroundColor = "#292929";       

})

closerectpopup.addEventListener("click" , function(){
 contactpopup.style.display = "none";
})




