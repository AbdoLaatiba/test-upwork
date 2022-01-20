let root,
  counter = 1;

window.addEventListener("load", (event) => {
    // getting the html element to display the items
  root = document.getElementById("root");
});

function displayItems(e) {
    // getting the value of the input
  let value = parseInt(e.target.value);

//   reset the counter
  counter = 1;

//   create the element and append them to the root element based on the Quantity
  createItem(value);
}

// clear the root element
function clearEl(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function createItem(count) {
  clearEl(root);
  for (let i = 0; i < count; i++) {
    //   create a countaining div of the item
    let item = document.createElement("div");
    item.classList.add("card");

    // create the inner span to hold the number
    let p = document.createElement("p");
    p.classList.add("card-number");
    p.innerHTML = counter;
    

    // append the items to the root element
    item.appendChild(p);
    root.appendChild(item);

    // increase the counter
    counter = counter + 1;
  }
}
