const priceElements = document.querySelectorAll('.prices');
let total = 0;

priceElements.forEach(priceElement => {
    const price = parseFloat(priceElement.textContent);
    if (!isNaN(price)) {
        total += price;
    }
});

const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.textContent = `Total Price: ${total.toFixed(2)}`;

totalRow.appendChild(totalCell);
document.querySelector('table').appendChild(totalRow);