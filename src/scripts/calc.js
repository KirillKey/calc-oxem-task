const orderList = document.querySelector('.order__list-calc');
const orderItem = document.querySelectorAll('.order__item-calc');
const inputCalc = document.querySelectorAll(".input-calc");
const fader = document.querySelectorAll("#calc-fader");
const percent = document.querySelector(".item-calc--decor--percent");

const summAuto = document.querySelector("[data-info=input-summ-auto]").dataset.info;
const firsPayment = document.querySelector("[data-info=input-first-payment]").dataset.info;
const month = document.querySelector("[data-info=input-months]").dataset.info;

for (const currElem of orderItem) {
  currElem.addEventListener('click', function (e) {
    const target = e.target;

    target.addEventListener('input', function (e) {
      e.preventDefault();
      if (target.dataset.info === currElem.dataset.info) {
        const calcElem = currElem.querySelector(".input-calc");
        const faderElem = currElem.querySelector("#calc-fader");

        function writeNum() {
          calcElem.value = target.value;
          faderElem.value = calcElem.value;
        }

        if (target.dataset.info === summAuto && target.value <= 6000000) {
          writeNum();
        } else { }

        if (target.dataset.info === firsPayment && target.value <= 60) {
          writeNum();
          percent.innerText = target.value + "%";
        } else { }

        if (target.dataset.info === month && target.value <= 60) {
          writeNum();
        } else { }
      }

    })

  })
}