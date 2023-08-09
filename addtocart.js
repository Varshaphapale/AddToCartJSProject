const product = [
    {
        id: 0,
        image: 'p1.jpg',
        title: 'Z Flip',
        price: 120,
    },

    {
        id: 1,
        image: 'p2.jpg',
        title: 'shoe',
        price: 60,
    },
    {
        id: 2,
        image: 'p4.jpg',
        title: 'lara',
        price: 120,
    },
    {
        id: 3,
        image: 'p3.webp',
        title: 'zara',
        price: 20,
    }

];

const categories = product;

let cart = [];

function addtocart(index) {
    console.log(index);
    cart.push({ ...categories[index] });
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.length;

    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            var { image, title, price } = item;
            total += price;
            document.getElementById("total").innerHTML = "$" + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                        <p style='font-size:12px;'>${title}</p>
                        <h2 style='font-size:12px;'>$ ${price}.00</h2>
                        <i class='fa fa-trash' onclick='delElement(${index})'></i>
                    </div>
                </div>`
            );
        }).join('');
    }

    document.getElementById("total").innerHTML = "$" + total + ".00";
}

document.getElementById('root').innerHTML = product.map((item, index) => {
    var { image, title, price } = item;
    return (`
        <div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}</h2> 
                <button onclick='addtocart(${index})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');
