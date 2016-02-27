var maxWeight = 100 * 1000;
var totalWeight = 0;
var totalPrice = 0;



sumVariants = function(partialPrice, variant) {
  return partialPrice + Number(variant.price);
};

 sumProducts = function(partialPrice, product) {
  return partialPrice + product.variants.reduce(sumVariants, 0);
};

 weightVariants = function(partialPrice, variant) {
  return partialPrice + Number(variant.grams);
};

 weightProducts = function(partialPrice, product) {
  return partialPrice + product.variants.reduce(weightVariants, 0);
};

 priceComputersKeyboards = function(products) {
  return products.filter((p) => {
    return p.product_type === 'Computer' ||
           p.product_type === 'Keyboard';
  }).reduce(sumProducts, 0);
};

 weightComputersKeyboards = function(products) {
  return products.filter((p) => {
    return p.product_type === 'Computer' ||
           p.product_type === 'Keyboard';
  }).reduce(weightProducts, 0);
};





$(document).ready(function () {

	$.getJSON("http://shopicruit.myshopify.com/products.json", function (obj) {
           products = obj.products;
           totalWeight = weightComputersKeyboards(products);

            totalPrice = priceComputersKeyboards(products);


    $('#weight').append(totalWeight / 1000 + "kg");
  $('#sub-total').append(totalPrice);  
        });

 // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  

    

});
