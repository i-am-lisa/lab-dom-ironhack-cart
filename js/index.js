// ITERATION 1

function updateSubtotal(product) {
  // assigning Variables
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let subtotal = product.querySelector('.subtotal span');
  //  console.log(price);
  //  console.log(quantity);

  let subtotalNum = Number(price.innerHTML) * Number(quantity.value);
  //console.log(total);

  
  subtotal.innerHTML = subtotalNum;  
  return subtotalNum;


  //console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let allProducts = document.querySelectorAll('.product');

  allProducts.forEach(function(elem){
    updateSubtotal(elem);
  });
  
  // ITERATION 3
  let allSubtotals = document.querySelectorAll('.subtotal span');
  //console.log(subtotals) ;

  let totalValue = document.querySelector('#total-value span');
  console.log(totalValue);
  let total = 0;

  allSubtotals.forEach(function(singleSubtotal){
    total = total + Number(singleSubtotal.innerHTML); 
    //console.log(singleSubtotal) ;
  });

    // console.log(total) ;


    

    // updating visually
   totalValue.innerHTML = total;  
    
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
