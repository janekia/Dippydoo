
  document.addEventListener('reflow:cart-product-added', function(e) {
    console.log('Product added to cart:', e.detail);
  });