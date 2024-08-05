const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", function()   
 {
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
});

const productData = {};

document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        productData[name] = { name, price };
        alert(`Produk ${name} dengan harga Rp ${price} telah ditambahkan.`);
        localStorage.setItem('productData', JSON.stringify(productData));
    });
});

document.getElementById('go-to-hasil').addEventListener('click', function() {
    window.location.href = 'beli.html';
});



      