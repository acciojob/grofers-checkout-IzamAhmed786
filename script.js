const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let price = document.querySelectorAll(".price");
  let total = 0;

	for (let t of price) {
		total += parseInt(t.textContent);
		
	}
  
};

getSumBtn.addEventListener("click", getSum);

