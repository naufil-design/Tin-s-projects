function searchProduct() {
  const searchInput = document.getElementById('search').value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const productName = product.querySelector('.product-name').textContent.toLowerCase();
    if (productName.includes(searchInput)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const switchThemeButton = document.querySelector('.switch-theme');
  const logo = document.getElementById('logo');
  const popupOverlay = document.getElementById('popup-overlay');
  const closeBtn = document.getElementById('close-btn');
  const displayImage = document.getElementById('display-image');
  const displayTitle = document.getElementById('display-title');
  const sellerLink = document.getElementById('contact-seller');
  const productsContainer = document.getElementById('products');

  const products = [
    { name: 'Lolly Backpack', image: './products-photos/product1.png', link: 'https://wa.me/p/6714720428600116/6285336557688' },
    { name: 'Gerbera Mini Cross Body Bag', image: './products-photos/product2.png', link: 'https://wa.me/p/5013899082064219/6285336557688' },
    { name: 'Mini Jeans Clutch', images: ['./products-photos/product3.png', './products-photos/product3-01.png', './products-photos/product3-02.png'], link: 'https://wa.me/p/5024972067557481/6285336557688' },
    { name: 'Connie Sling', images: ['./products-photos/product4.png', './products-photos/product4-01.png'], link: 'https://wa.me/p/4845258368911748/6285336557688' },
    { name: 'Ulala Handbag', image: './products-photos/product5.png', link: 'https://wa.me/p/6618535698220452/6285336557688' },
    { name: 'Spicy Tote Bag', image: './products-photos/product6.png', link: 'https://wa.me/p/4731754476915445/6285336557688' },
    { name: 'Jeans Tote Bag', image: './products-photos/product7.png', link: 'https://wa.me/p/4870084826411829/6285336557688' },
    { name: 'Ethnic Clutch', image: './products-photos/product8.png', link: 'https://wa.me/p/4807473642645323/6285336557688' },
    { name: 'Over Sized Hobo', image: './products-photos/product9.png', link: 'https://wa.me/p/4787721827986009/6285336557688' },
    { name: 'Jeans Hobo Bag', image: './products-photos/product10.png', link: 'https://wa.me/p/4513432915446880/6285336557688' },
  ];

  function setTheme(theme) {
    if (theme === 'light') {
      logo.style.filter = 'invert(1)';
      document.documentElement.style.setProperty('--theme', '#fefefe');
      document.documentElement.style.setProperty('--inv-theme', '#333');
      switchThemeButton.querySelector('.icon').classList.remove('ion-md-moon');
      switchThemeButton.querySelector('.icon').classList.add('ion-md-sunny');
    } else {
      logo.style.filter = '';
      document.documentElement.style.setProperty('--theme', '#333');
      document.documentElement.style.setProperty('--inv-theme', '#fefefe');
      switchThemeButton.querySelector('.icon').classList.remove('ion-md-sunny');
      switchThemeButton.querySelector('.icon').classList.add('ion-md-moon');
    }
  }

  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  switchThemeButton.addEventListener('click', () => {
    const currentTheme = switchThemeButton.querySelector('.icon').classList.contains('ion-md-moon') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  products.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.dataset.index = index.toString(); // Pastikan index adalah string

    if (product.images) {
      const subPhotos = document.createElement('span');
      subPhotos.classList.add('sub-photos');

      product.images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = '';
        subPhotos.appendChild(img);
      });

      productDiv.appendChild(subPhotos);
    } else {
      const img = document.createElement('img');
      img.src = product.image;
      img.alt = '';
      productDiv.appendChild(img);
    }

    const productName = document.createElement('p');
    productName.classList.add('product-name');
    productName.textContent = product.name;

    productDiv.appendChild(productName);

    productDiv.addEventListener('click', () => {
      displayTitle.textContent = product.name;
      displayImage.src = product.images ? product.images[0] : product.image;
      sellerLink.href = product.link;

      popupOverlay.classList.add('active');
    });

    productsContainer.appendChild(productDiv);
  });

  closeBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('active');
  });

  popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
      popupOverlay.classList.remove('active');
    }
  });
});