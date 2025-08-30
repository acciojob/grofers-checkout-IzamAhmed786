const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let prices = document.querySelectorAll(".price");
  let total = 0;

 
  for (let t of prices) {
    total += parseInt(t.textContent); // convert text to number
  }

  
  let table = document.querySelector("table");
  let newRow = document.createElement("tr");

  let totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = "Total Price = " + total;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
