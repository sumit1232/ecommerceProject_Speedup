import React from 'react'

const Navbar = () => {
  return (
    <>
<nav className="bg-white border-b">
  <div className="container mx-auto flex items-center justify-between px-4 py-3">
    <a href="#" className="font-bold text-xl">ShopMate</a>
    <ul className="flex space-x-6">
      <li><a href="#" className="hover:text-blue-600">Home</a></li>
      <li><a href="#" className="hover:text-blue-600">Shop</a></li>
      <li><a href="#" className="hover:text-blue-600">Categories</a></li>
      <li><a href="#" className="hover:text-blue-600">Contact</a></li>
    </ul>
    <div className="flex space-x-4">
      <a href="#" className="relative">
        <svg className="w-6 h-6" fill="none" stroke="currentColor"></svg>
        <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-1">2</span>
      </a>
      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar