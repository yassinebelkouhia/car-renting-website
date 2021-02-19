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
const Engine1 = document.getElementById("dispEngine1");
const Engine2 = document.getElementById('dispEngine2');

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
 }
});

