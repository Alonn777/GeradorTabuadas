const form = document.querySelector("#form-table");
const number = document.querySelector("#number");
const multiplicator = document.querySelector("#multiplicator");
const titleTable = document.querySelector("#title span");
const operationMultplicate = document.querySelector("#multiplicate-operations");

const createTable = (number, multiplicator) => {
  operationMultplicate.innerHTML = "";
  for (let i = 1; i <= multiplicator; i++) {
    const result = number * i;
    const template = `<div class="row">
<div class="operation"> ${number} x ${i} =</div>
<div class="result"> ${result}</div>
</div>`;
const domParser = new DOMParser();
const htmlTemplate= domParser.parseFromString(template, "text/html");
const dom = htmlTemplate.querySelector('.row')
operationMultplicate.appendChild(dom)
titleTable.innerHTML = `${number}`
  }
};

// eventos
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberValue = +number.value;
  const multiplicatorValue = +multiplicator.value;
  if (!numberValue || !multiplicatorValue) return;
  console.log(numberValue, multiplicatorValue);
  createTable(numberValue, multiplicatorValue);
});
