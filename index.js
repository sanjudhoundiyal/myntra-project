
//let bag=[];
let bag;

window.onload = function () {
  //get reconditioned bag from localStorage
  let bagitemstr = localStorage.getItem('bag');
  bag = bagitemstr ? JSON.parse(bagitemstr) : [];
  getBag();
};

// ADD TO BAG FUNCTIONALITY
function addBag(itemId) {
  bag.push(itemId);

  //store the updated bag in localStorage
  localStorage.setItem('bag', JSON.stringify(bag));
  getBag();
  // alert("Item added to bag successfully!");
}

function getBag() {
  const bagdata = document.querySelector('.bag_count');
  if (!bagdata) return;

  if (bag.length > 0) {
    bagdata.style.visibility = 'visible';
    bagdata.innerText = bag.length;
  } else {
    bagdata.style.visibility = 'hidden';
  }
}

// Function to update the bag count display
function getBag() {
  const bagdata = document.querySelector('.bag_count');
  

  if (bag.length > 0) {
    bagdata.style.visibility = 'visible';
    bagdata.innerText = bag.length;
  } else {
    bagdata.style.visibility = 'hidden';
  }
}



function getData() {
let data = document.querySelector('.item_container');
if (!data) return; // Check if the container exists

let innerHtml = '';// variable to store the HTML content
items.forEach(item => {
    innerHtml += `
      <div class="items_container">
        <div class="item">
            <img class="image-item" src="${item.image}" alt="Product Image">
            <div class="rating">
                ${item.rating.stars}⭐ | ${item.rating.noOfReviewer}${item.rating.count} 
            </div>
            <div class="company_name">${item.company}</div>
            <div class="item_name">${item.item_name}</div>
            <div class="price">
                <span class="current_price">${item.current_price}</span>
                <span class="original_price">${item.original_price}</span>
                <span class="discount">${item.discount_percentage} OFF</span>
            </div>
            <button class="add_to_cart" onclick="addBag(${item.id})">Add to Cart</button>
        </div>
        </div>`
});

data.innerHTML = innerHtml;}
 getData();
