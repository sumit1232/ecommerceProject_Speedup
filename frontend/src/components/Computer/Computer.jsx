import React from 'react'

const Computer = () => {
  return (
    <>
<section class="bg-gray-100 py-12">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
    <div class="md:w-1/2 mb-8 md:mb-0">
      <h1 class="text-4xl font-bold mb-4">Powerful Computers for Every Need</h1>
      <p class="mb-6 text-lg">Shop the latest laptops, desktops, and gaming rigs. Fast shipping. Trusted brands.</p>
      <a href="#products" class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Shop Now</a>
    </div>
    <div class="md:w-1/2">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41oDR5+IEOL._SX300_SY300_.jpg" alt="Featured Computer" class="rounded shadow-lg" />
    </div>
  </div>
</section>

<section id="products" class="max-w-7xl mx-auto py-12 px-4">
  <h2 class="text-2xl font-bold mb-6">Best Sellers</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/418ucDtFEQL._SX300_SY300_QL70_FMwebp_.jpg" alt="Laptop" class="mb-4 rounded" />
      <h3 class="font-semibold mb-2">UltraBook Pro 15"</h3>
      <ul class="text-sm text-gray-600 mb-2">
        <li>Intel i7, 16GB RAM, 512GB SSD</li>
        <li>15.6" FHD Display</li>
      </ul>
      <p class="mb-2 font-bold">$1,199.00</p>
      <button class="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Add to Cart</button>
    </div>
    <div class="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41jtYYwLwyL._SY300_SX300_QL70_FMwebp_.jpg" alt="Gaming PC" class="mb-4 rounded" />
      <h3 class="font-semibold mb-2">Gamer Xtreme Desktop</h3>
      <ul class="text-sm text-gray-600 mb-2">
        <li>AMD Ryzen 7, 32GB RAM, 1TB SSD</li>
        <li>NVIDIA RTX 4070</li>
      </ul>
      <p class="mb-2 font-bold">$1,799.00</p>
      <button class="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Add to Cart</button>
    </div>
    <div class="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41TC1v6AWTL._SX300_SY300_QL70_FMwebp_.jpg" alt="Office PC" class="mb-4 rounded" />
      <h3 class="font-semibold mb-2">OfficeMate Mini</h3>
      <ul class="text-sm text-gray-600 mb-2">
        <li>Intel i5, 8GB RAM, 256GB SSD</li>
        <li>Compact Design</li>
      </ul>
      <p class="mb-2 font-bold">$599.00</p>
      <button class="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Add to Cart</button>
    </div>
  </div>
</section>

<section class="bg-blue-50 py-8">
  <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <div class="mb-4 md:mb-0">
      <h3 class="font-bold text-lg mb-2">Why Shop With Us?</h3>
      <ul class="text-gray-700">
        <li>✔ Free shipping on orders over $500</li>
        <li>✔ 24/7 customer support</li>
        <li>✔ 1-year warranty on all computers</li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold text-lg mb-2">Need Help?</h3>
      <a href="#support" class="text-blue-600 hover:underline">Contact Support</a>
    </div>
  </div>
</section>

<section class="max-w-7xl mx-auto py-12 px-4">
  <h2 class="text-2xl font-bold mb-6">What Our Customers Say</h2>
  <div class="flex flex-col md:flex-row gap-8">
    <div class="bg-white p-4 rounded shadow flex-1">
      <p class="mb-2">"Fast delivery and the laptop is amazing for work and gaming!"</p>
      <span class="text-gray-600">— Alex P.</span>
    </div>
    <div class="bg-white p-4 rounded shadow flex-1">
      <p class="mb-2">"Customer service helped me pick the right PC. Highly recommend."</p>
      <span class="text-gray-600">— Priya S.</span>
    </div>
  </div>
</section>

<footer class="bg-gray-900 text-white py-8">
  <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between">
    <div>
      <h4 class="font-bold mb-2">CompuStore</h4>
      <p class="text-gray-400">© 2025 CompuStore. All rights reserved.</p>
    </div>
    <ul class="flex space-x-6 mt-4 md:mt-0">
      <li><a href="#" class="hover:underline">Privacy Policy</a></li>
      <li><a href="#" class="hover:underline">Terms</a></li>
      <li><a href="#" class="hover:underline">Contact</a></li>
    </ul>
  </div>
</footer>

    </>
  )
}

export default Computer