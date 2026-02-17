let historyData = [];

function simulatePayment() {
  const bank = document.getElementById("bankSelect").value;
  const time = new Date().toLocaleTimeString();
  const record = `تم الدفع عبر ${bank} في ${time}`;
  
  historyData.push(record);
  alert("تم الدفع بنجاح ⚡");
}

function showHistory() {
  const historySection = document.getElementById("history");
  const historyList = document.getElementById("historyList");
  
  historyList.innerHTML = "";
  
  historyData.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });

  historySection.classList.toggle("hidden");
}
