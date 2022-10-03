const inputCalc = document.querySelector(".input-calc");
const range = document.querySelector("#calc-fader");
const orderItem = document.querySelector('.order__item-calc');

const summAuto = document.querySelector("[data-info=input-summ-auto]");
const firsPayment = document.querySelector("[data-info=input-first-payment]");
const month = document.querySelector("[data-info=input-months]");
console.log(month.childNodes);

// const attrs = document.querySelectorAll("[data-info]");
const attrs = document.querySelectorAll(".order__list-calc > .order__item-calc");


for (const attr of attrs) {
  attr.addEventListener('click', function (e) {

    e.target.addEventListener("input", function (e) {

      const thisAttr = e.target.getAttribute('data-info');
      // console.log(thisAttr);
      console.log(thisAttr.childNodes);

      // if (e.target.getAttribute('data-info') === range.getAttribute('data-info') && inputCalc.getAttribute('data-info')) {
      if (thisAttr) {

        range.value = e.target.value;
        inputCalc.value = e.target.value;

      }
    });

    // range.addEventListener("input", function (e) {
    //   console.log(this.value);
    //   inputCalc.value = this.value;
    // });

  })
}




function calculator() { }



// if (orderItem.classList.contains("active")) {
//   orderItem.classList.remove('active');
// } else { orderItem.classList.add('active'); }