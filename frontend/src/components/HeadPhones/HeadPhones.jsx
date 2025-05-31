import React from 'react'

const HeadPhones = () => {
  return (
   <>
<section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 py-14">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4">
    <div className="md:w-1/2 text-white mb-8 md:mb-0">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Experience Premium Sound</h1>
      <p className="mb-6 text-lg">Shop the latest wireless headphones and elevate your music, gaming, and calls with crystal-clear audio.</p>
      <a href="#products" className="bg-white text-blue-700 font-bold px-6 py-3 rounded shadow hover:bg-gray-100 transition">Shop Headphones</a>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41jcCpExIzL._SX300_SY300_QL70_FMwebp_.jpg" alt="Headphones" className="rounded-lg shadow-lg" />
    </div>
  </div>
</section>

<section id="products" className="max-w-6xl mx-auto py-14 px-4">
  <h2 className="text-2xl font-bold mb-8 text-center">Best-Selling Headphones</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/31VD0qReIYL._SX300_SY300_QL70_FMwebp_.jpg" alt="Wireless Headphone" className="mb-4 rounded" />
      <h3 className="font-semibold text-lg mb-2">Wireless Noise Cancelling</h3>
      <ul className="text-gray-600 text-sm mb-2">
        <li>Active Noise Cancellation</li>
        <li>30hr Battery, Bluetooth 5.2</li>
        <li>Touch Controls</li>
      </ul>
      <div className="font-bold text-xl mb-2">$199.99</div>
      <button className="bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-800 transition">Add to Cart</button>
    </div>
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/31QB73-5IEL._SX300_SY300_QL70_FMwebp_.jpg" alt="Gaming Headset" className="mb-4 rounded" />
      <h3 className="font-semibold text-lg mb-2">Pro Gaming Headset</h3>
      <ul className="text-gray-600 text-sm mb-2">
        <li>7.1 Surround Sound</li>
        <li>Detachable Mic, RGB Lights</li>
        <li>Wired/USB Connectivity</li>
      </ul>
      <div className="font-bold text-xl mb-2">$89.99</div>
      <button className="bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-800 transition">Add to Cart</button>
    </div>
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41aqD2S+SgL._SY300_SX300_.jpg" alt="Studio Headphone" className="mb-4 rounded" />
      <h3 className="font-semibold text-lg mb-2">Studio Monitor Headphones</h3>
      <ul className="text-gray-600 text-sm mb-2">
        <li>Hi-Res Audio, Wired</li>
        <li>Comfort Cushions</li>
        <li>Foldable Design</li>
      </ul>
      <div className="font-bold text-xl mb-2">$129.99</div>
      <button className="bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-800 transition">Add to Cart</button>
    </div>
  </div>
</section>

<section className="bg-blue-50 py-8">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
      <h3 className="font-bold text-lg mb-2">Why Buy Headphones From Us?</h3>
      <ul className="text-gray-700">
        <li>✔ Free shipping on orders over $100</li>
        <li>✔ 2-year warranty on all headphones</li>
        <li>✔ 24/7 expert customer support</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-lg mb-2">Need Help?</h3>
      <a href="/contact" className="text-blue-700 hover:underline">Contact Support</a>
    </div>
  </div>
</section>

<section className="max-w-6xl mx-auto py-12 px-4">
  <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h2>
  <div className="flex flex-col md:flex-row gap-8">
    <div className="bg-white p-4 rounded shadow flex-1">
      <p className="mb-2">"The noise cancelling is incredible. I use them every day for work and travel!"</p>
      <span className="text-gray-600">— Sam T.</span>
    </div>
    <div className="bg-white p-4 rounded shadow flex-1">
      <p className="mb-2">"Great sound quality and super comfortable for long gaming sessions."</p>
      <span className="text-gray-600">— Priya S.</span>
    </div>
  </div>
</section>

<footer className="bg-gray-900 text-white py-8">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
    <div>
      <h4 className="font-bold mb-2">SoundStore</h4>
      <p className="text-gray-400">© 2025 SoundStore. All rights reserved.</p>
    </div>
    <ul className="flex space-x-6 mt-4 md:mt-0">
      <li><a href="#" className="hover:underline">Privacy Policy</a></li>
      <li><a href="#" className="hover:underline">Terms</a></li>
      <li><a href="/contact" className="hover:underline">Contact</a></li>
    </ul>
  </div>
</footer>

   </>
  )
}

export default HeadPhones