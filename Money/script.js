const coinForm = document.getElementById("coinForm");
const coinContainer = document.getElementById("coinContainer");

coinForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const countInput = document.getElementById("count");
  const coinTypeSelect = document.getElementById("coinType");

  const count = parseInt(countInput.value);
  const coinType = coinTypeSelect.value;

  for (let i = 0; i < count; i++) {
    const coin = document.createElement("div");
    coin.textContent = coinType;
    coin.className = "coin";

    coin.addEventListener("click", function () {
      coinContainer.removeChild(coin);
    });

    coinContainer.appendChild(coin);
  }

  countInput.value = "";
});
