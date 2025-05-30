import React from 'react'

const Offers = () => {
  return (
   <>
       
<section className="bg-gray-100 py-16">
  <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h1 className="text-4xl font-bold mb-4">Discover the Best Deals on Trendy Products</h1>
      <p className="mb-6 text-lg">Shop the latest arrivals and exclusive offers, curated just for you.</p>
      <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Shop Now</a>
    </div>
    <div className="md:w-1/2">
      <img src="https://via.placeholder.com/400x300" alt="Featured Product" className="rounded shadow-lg" />
    </div>
  </div>
</section>
   </>
  )
}

export default Offers