const planButtons = [...document.querySelectorAll(".plan")];
let selected = planButtons[0];
const priceText = n => "₹" + Number(n).toLocaleString("en-IN");
function choosePlan(button) {
  selected = button;
  planButtons.forEach(p => p.classList.toggle("selected", p === button));
  document.getElementById("summaryName").textContent = button.dataset.name;
  document.getElementById("summaryPrice").textContent = priceText(button.dataset.price);
  document.getElementById("payAmount").textContent = priceText(button.dataset.price);
}
planButtons.forEach(button => button.addEventListener("click", () => choosePlan(button)));
document.getElementById("continueBtn").addEventListener("click", () => {
  const playerId = document.getElementById("playerId").value.trim();
  if (!playerId) { alert("Please enter your Player ID."); document.getElementById("playerId").focus(); return; }
  document.getElementById("payAmount").textContent = priceText(selected.dataset.price);
  document.getElementById("paymentPanel").hidden = false;
  document.getElementById("paymentPanel").scrollIntoView({behavior:"smooth",block:"start"});
});
document.getElementById("backBtn").addEventListener("click", () => {
  document.getElementById("paymentPanel").hidden = true;
  document.querySelector(".details").scrollIntoView({behavior:"smooth",block:"center"});
});
document.getElementById("submitBtn").addEventListener("click", () => {
  const txn = document.getElementById("txnId").value.trim();
  if (!txn) { alert("Please enter your UPI transaction ID / UTR."); document.getElementById("txnId").focus(); return; }
  document.getElementById("status").textContent = "Details entered. Please contact the store administrator to verify the payment and process your order.";
});
document.getElementById("year").textContent = new Date().getFullYear();
