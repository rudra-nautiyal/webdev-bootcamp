// DOM manipulation

// example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    // why not use arrow fn? Becoz it always points towards the global this.
    document.getElementById("myParagraph").textContent =
      "the paragraph has changed!";
  });

//   example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let city = document.getElementById("citiesList");
    city.firstElementChild.classList.add("highlight");
  });

//   example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  document.getElementById("coffeeType").textContent = "Espresso";
  document.getElementById("coffeeType").style.backgroundColor = "brown";
  document.getElementById("coffeeType").style.padding = "5px";
});

// example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

// example 6

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("chaicode");
});

// example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

// example 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = feedback;
  });

// example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = `DOM fully loaded!`;
});

// example 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    document.getElementById("descriptionText").classList.toggle("highlight");
  });
