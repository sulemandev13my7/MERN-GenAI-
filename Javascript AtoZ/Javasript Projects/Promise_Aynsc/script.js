// const productContainer = document.getElementById('products');
// const loading = document.getElementById('loading');

// fetch("https://fakestoreapi.com/products").then((response) => {
//     return response.json()
// }).then((products) => {
//     console.log(products)
//     loading.style.display = "none"
//     products.map((product, index) => {
//         productContainer.innerHTML +=
//             `
//          <div class="card">
//             <img src="${product.image}" alt="">
//             <p>${product.category}</p>
//             <h3>${product.title}</h3>
//             <h2>${product.price}</h2>
//             <button>Add to Cart</button>
//         </div>
//         `
//     })
// }).catch((error) => {
//     loading.innerHTML = `Something went wrong`
// })


// const productContainer = document.getElementById('products');
// const loading = document.getElementById('loading');

// const getProducts = async () => {
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const products = await response.json();
//         loading.style.display = "none";

//         console.log(products);
//         products.map((product) => {
//             productContainer.innerHTML += `
//                 <div class="card">
//                     <img src="${product.image}" alt="">
//                     <p>${product.category}</p>
//                     <h3>${product.title}</h3>
//                     <h2>$${product.price}</h2>
//                     <button>Add to Cart</button>
//                 </div>
//             `;
//         });


//     } catch (error) {
//         loading.innerHTML = "Something went wrong";
//         console.log(error);
//     }
// }

// getProducts();


const productContainer = document.getElementById('products');
const loading = document.getElementById('loading');

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

let allProducts = [];

const categories = [
    "men's clothing", "jewelery", "women's clothing", "electronics"
]

categories.map((category) => {
    categorySelect.innerHTML += `
    <option>${category}</option>
    `
})
async function getAllProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const products = await response.json();

        loading.style.display = "none"

        allProducts = products;

        displayProducts(allProducts)

    } catch (error) {
        loading.innerHTML = "Some thing went wrong"
        console.log(error);
    }
}

getAllProducts()

function displayProducts(products) {
    productContainer.innerHTML = "";

    products.map((product) => {
        productContainer.innerHTML +=
        `
           <div class="card">
               <img src="${product.image}" alt="">
               <p>${product.category}</p>
               <h3>${product.title}</h3>
               <h2>$${product.price}</h2>
               <button>Add to Cart</button>
           </div>        
        `
    })
}


searchInput.addEventListener('input',filterProducts);
categorySelect.addEventListener('change',filterProducts);

priceRange.addEventListener('input',()=>{
    priceValue.innerText =
    `$${priceRange.value}`
    filterProducts()
});

function filterProducts(){
    const searchValue = searchInput.value.toLowerCase()
    const selectedCategory  = categorySelect.value;
    const maxPrice = priceRange.value

    const filteredProducts = allProducts.filter((product)=>{
    const matchSearch = product.title.toLowerCase().includes(searchValue)

    const matchCategory = selectedCategory === "all" || product.category === selectedCategory

    const matchPrice = product.price <= maxPrice
        
    return (
        matchSearch && matchCategory && matchPrice
    )
})
displayProducts(filteredProducts)
}

