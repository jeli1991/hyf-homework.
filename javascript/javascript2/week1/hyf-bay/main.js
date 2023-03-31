console.log("Script loaded");
const body=document.body;

const products = getAvailableProducts(); // get the array of products

function renderProducts(products) {
    let ul=document.querySelector("ul");
    products.forEach(product =>{
        const li=document.createElement("li");
        li.innerHTML=`<h5>${product.name}<h5>
                      <p>price : ${product.price}<p>
                      <p>'rating': ${product.rating}<p>`;
        ul.appendChild(li);

    });
    body.appendChild(ul);
}


renderProducts(products); // render the list of products

