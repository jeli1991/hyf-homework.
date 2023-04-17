window.getAvailableProducts = function() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function getRandomItem(availableProductNames) {
      return availableProductNames[
        getRandomInt(0, availableProductNames.length - 1)
      ];
    }
  
    function getRandomProductname() {
      const preWords = [
        "Used",
        "Fantastic",
        '"Used"',
        "Broken",
        "Beautiful",
        "Wet",
        "Green",
        "Sloppy",
        "Dirty"
      ];
      const productNames = [
        "Carrot",
        "Drone",
        "Giftcard",
        "Puppy",
        "Car",
        "Shirt",
        "Milk",
        "Chalk",
        "Fish fingers",
        "Socks",
        "Chocolate",
        "Toothbrush",
        "Computer",
        "Nokia",
        "Cologne"
      ];
  
      let chosenProductName = getRandomItem(productNames);
      const shouldHavePreWord = getRandomInt(0, 10) > 6;
  
      if (shouldHavePreWord) {
        const preWord = preWords[getRandomInt(0, preWords.length - 1)];
        chosenProductName = `${preWord} ${chosenProductName}`;
      }
  
      return chosenProductName;
    }
  
    const numberOfAvailableProducts = getRandomInt(0, 30);
    const availableProducts = Array.apply(
      null,
      Array(numberOfAvailableProducts)
    ).map(() => {
      const name = getRandomProductname();
      return {
        id: `${name}${getRandomInt(0, 100000)}`,
        name,
        price: getRandomInt(0, 10000),
        rating: getRandomInt(1, 10)
      };
    });
  
    return availableProducts;
  };   
  
  console.log("Script loaded");
  
  function renderProducts(products) {
    const section = document.createElement('section');
    const ul = document.createElement('ul');
  
    products.forEach(product => { 
      const li = document.createElement('li'); 
      li.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Rating: ${product.rating}</p>
      `;
      ul.appendChild(li); 
    });
  
    section.appendChild(ul); 
    document.body.appendChild(section); 
  }
  
  const products = getAvailableProducts();
  renderProducts(products); 
  
  const searchInput = document.getElementById('Search-input');
  searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase(); 
    const filteredProducts = products.filter(product => {
      const productName = product.name.toLowerCase();
      const productPrice = product.price;
      return productName.includes(searchValue) || productPrice >= searchValue;
    });
    renderProducts(filteredProducts); 
  });
  