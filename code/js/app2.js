let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
var myVariable = localStorage.getItem('quantity');
quantity.textContent = myVariable;
var itemsField = document.getElementById("items");
      
let products = [
    {
        id: 1,
        name: 'Reebok Men Energen Lite',
        image: 'reebok men energon lite3.png',
        price: 2000,
    },
    {
        id: 2,
        name: 'Puma Men Supernova IDP Running Shoes',
        image: 'pumashoe3.png',
        price: 1636,
    },
    {
        id: 3,
        name: 'Adidas Mens Acme M Sneaker',
        image: 'adidas_acme-removebg-preview.png',
        price: 3449,
    },
    {
        id: 4,
        name: 'Titan Karishma M',
        image: 'titan_karishma-m.png',
        price: 1999,
    },
    {
        id: 5,
        name: 'Titan Karishma W',
        image: 'titan_women1.png',
        price: 1999,
    },
    {
        id: 6,
        name: 'Redmi Smart TV',
        image: 'redmi tv.png',
        price: 11999,

    },
    {
        id: 7,
        name: 'Samsung Smart TV',
        image: 'samsung_tv.png',
        price: 12990,
    },
    {
        id: 8,
        name: 'Hisense Mini Refrigerator',
        image: 'hisense_mini_fridge.png',
        price: 7990,
    },
    {
        id: 9,
        name: 'Samsung DD Refrigerator',
        image: 'samsung_fridge.png',
        price: 14990,

    },
    {
        id: 10,
        name: 'MSI GF66 Laptop',
        image: 'msi_katana.png',
        price: 70499,

    },
    {
        id: 11,
        name: 'ASUS Vivobook Pro 16',
        image: 'asuslaptop.png',
        price: 89499,

    },
    {
        id: 12,
        name: 'Morphy Richards Coffee Maker',
        image: 'coffeemaker.png',
        price: 1549,

    },
    {
        id: 13,
        name: 'Redmi Note 11T 5G',
        image: 'redmi note 11t.png',
        price: 18499,

    },
    {
        id: 14,
        name: 'Samsung Galaxy S23 Ultra',
        image: 'samsung galaxy.png',
        price: 124999,

    },
    {
        id: 15,
        name: 'Voltas Air Conditioner',
        image: 'voltas ac.png',
        price: 27890,

    },
    {
        id: 16,
        name: "Women's Kanjivaram Saree",
        image: 'saree.png',
        price: 949,

    },
    {
        id: 17,
        name: "Allen Solly Men's Shirt",
        image: 'shirt.png',
        price: 749,

    },
    {
        id: 18,
        name: 'SERVO - Engine Oil',
        image: 'servo oil.png',
        price: 339,
    }
];
let listCards  = [];
function LoadCard(){
    for (let i = 0; i < 18; i++) {
        var myQ = parseInt(localStorage.getItem(i))
        if(myQ>0){
            addToCard(i,myQ);
            changeQuantity(i, myQ);
        }
      }
}
function addToCard(key,q){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = q;
        localStorage.setItem(key, q);
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        value.quantity = parseInt(localStorage.getItem(key));
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value.quantity>0){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="localStorage.setItem(${key}, ${value.quantity - 1});changeQuantity(${key}, ${value.quantity - 1});">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="localStorage.setItem(${key}, ${value.quantity + 1});changeQuantity(${key}, ${value.quantity + 1});">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
    localStorage.setItem('quantity', count);
    localStorage.setItem('total', totalPrice.toLocaleString());
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = parseInt(localStorage.getItem(key));
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
function SetItemValue(){
    let itemList="";
    for (let i = 0; i < 18; i++) {
        var myQ = parseInt(localStorage.getItem(i));
        if(myQ>0){
            itemList += listCards[i].name + " ";     
            itemList += myQ + " ";               
        }
      }
      itemsField.value = itemList;
}

LoadCard();