import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
    <div>
      <h4 className="font-bold mb-2">ShopMate</h4>
      <p className="text-gray-400">© 2025 ShopMate. All rights reserved.</p>
    </div>
    <ul className="flex space-x-6 mt-4 md:mt-0">
      <li><a href="#" className="hover:underline">Privacy Policy</a></li>
      <li><a href="#" className="hover:underline">Terms</a></li>
      <li><a href="#" className="hover:underline">Contact</a></li>
    </ul>
  </div>
</footer>
    </>
  )
}

export default Footer