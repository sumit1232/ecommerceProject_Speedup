import React from 'react'

const Home = () => {

  return (
    <>
<section className="container mx-auto py-12 px-4">
  <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg" alt="Product 1" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">Apple iPhone 15 (128 GB) - Black</h3>
      <p className="mb-2 text-gray-600">$29.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/61eYPkT2zZL._AC_UY327_FMwebp_QL65_.jpg" alt="Product 2" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Teal</h3>
      <p className="mb-2 text-gray-600">$39.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/3164xgZ11EL._SY445_SX342_QL70_FMwebp_.jpg" alt="Product 3" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium</h3>
      <p className="mb-2 text-gray-600">$49.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
  </div>
</section>

<section className="container mx-auto py-12 px-4">
  <h2 className="text-2xl font-bold mb-6">Customers’ Most-Loved Fashion for you</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/31YrZL046rL._SY445_SX342_QL70_FMwebp_.jpg" alt="Product 1" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display; Black</h3>
      <p className="mb-2 text-gray-600">$29.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/31GYay3meDL._SY445_SX342_QL70_FMwebp_.jpg" alt="Product 2" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">Apple AirPods 4 Wireless Earbuds, Bluetooth Headphones, with Active Noise Cancellation, Adaptive Audio, Transparency Mode, Personalised Spatial Audio, USB-C Charging Case, Wireless Charging, H2 Chip</h3>
      <p className="mb-2 text-gray-600">$39.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41Wewuj1HcL._SY445_SX342_QL70_FMwebp_.jpg" alt="Product 3" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">Apple Watch Series 10 [GPS 42 mm] Smartwatch with Jet Black Aluminium Case with Black Sport Band - S/M. Fitness Tracker, ECG App, Always-On Retina Display, Water Resistant</h3>
      <p className="mb-2 text-gray-600">$49.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
  </div>
</section>

<section className="container mx-auto py-12 px-4">
  <h2 className="text-2xl font-bold mb-6">More items to consider</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41YzPePn9iL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 1" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">Xbox Series S</h3>
      <p className="mb-2 text-gray-600">$29.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41b-EDZt7dL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 2" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">Sony PlayStation5 Gaming Console (Slim)</h3>
      <p className="mb-2 text-gray-600">$39.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/31hIe+bpJ-L._SY300_SX300_.jpg" alt="Product 3" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">Gabit Smart Ring | Health & Fitness Tracker | Stress & Sleep Monitoring | Buy Ring Sizing Kit First | 15+ Workout Modes | Track Steps, HRV, HR, SPO2 | Smart Ring for Men & Women | Matte Black 6</h3>
      <p className="mb-2 text-gray-600">$49.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
  </div>
</section>

<section className="container mx-auto py-12 px-4">
  <h2 className="text-2xl font-bold mb-6">Inspired by your browsing history</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41BK-0tJ6nL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 1" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">Noise Halo Plus 1.46" Super AMOLED Display Elite Smart Watch, Bluetooth Calling, Stainless Steel Build, Always on Display, Upto 7 Days Battery (Elite Black)</h3>
      <p className="mb-2 text-gray-600">$29.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/5164DhS4vvL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 2" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">Titan Heritage 1.43" AMOLED Stainless Steel Bracelet Smart Watch for Men, BT Calling, Voice Assistant, Quick Health Measurement, Functional Crown, 3D UI, 60Hz Display, Fast Charging (Blue)</h3>
      <p className="mb-2 text-gray-600">$39.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/31BhxzJTVfL._SX300_SY300_QL70_FMwebp_.jpg" alt="Product 3" className="mb-4 rounded" />
      <h3 className="font-semibold mb-2">FITTR HART X2 Smart Ring | Size First w/Sizing Kit | Sleep, Recovery, Activity & Fitness Tracker | 8-Day Battery, 50m Water Resistance | (Frost Silver, 7)</h3>
      <p className="mb-2 text-gray-600">$49.99</p>
      <a href="#" className="text-blue-600 hover:underline">View Details</a>
    </div>
  </div>
</section>



    
  



    </>
  )
}

export default Home