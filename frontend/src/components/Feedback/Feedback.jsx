import React from 'react'

const Feedback = () => {
  return (
    <>
    <section className="bg-gray-50 py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
    <div className="flex flex-col md:flex-row gap-8">
      <div className="bg-white p-4 rounded shadow flex-1">
        <p className="mb-2">"Amazing products and fast delivery!"</p>
        <span className="text-gray-600">— Jane D.</span>
      </div>
      <div className="bg-white p-4 rounded shadow flex-1">
        <p className="mb-2">"Great customer service and quality."</p>
        <span className="text-gray-600">— Mike S.</span>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Feedback