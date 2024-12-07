let counterId = 1;
let userInput = document.getElementById("userInput");
let addLine = document.getElementById("addLine");
let noProducts = document.getElementById("noProducts");

userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (counterId >= 1) {
      noProducts.classList.add("noProd");
    }
    addLine.innerHTML += ` <th scope="row">${counterId}</th>
                  <td>${userInput.value}</td>
                   <td><i onclick="removeItem(this)" class="text-danger bi bi-trash3-fill"></i></td>
                `;
    sessionStorage.setItem(`item${counterId}`, `${userInput.value}`);
    userInput.value = "";
    counterId++;
  }
});
function removeItem(that) {
  that.parentNode.parentNode.remove();
  sessionStorage.removeItem(`item${counterId}`);
  counterId--;
}
function clearSessionBtn() {
  sessionStorage.clear();
  clearBoardBtn();
  document.getElementById(
    "alertPlace"
  ).innerHTML = `<h5 class="text-danger opacity-50">Memory Cleared!</h5>`;
  setTimeout(() => {
    document.getElementById("alertPlace").innerHTML = "";
  }, 2500);
}
function clearBoardBtn() {
  addLine.innerHTML = "";
  noProducts.classList.remove("noProd");
  document.getElementById(
    "alertPlace"
  ).innerHTML = `<h5 class="text-danger opacity-50">Cleared!</h5>`;
  setTimeout(() => {
    document.getElementById("alertPlace").innerHTML = "";
  }, 2500);
}
