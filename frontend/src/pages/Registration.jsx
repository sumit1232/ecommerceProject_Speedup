import React from 'react'

const Registration = () => {
  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
    <div className="mb-6 text-center">
      <h2 className="text-3xl font-bold mb-2 text-blue-700">Create Account</h2>
      <p className="text-gray-600">Sign up to start shopping with us!</p>
    </div>
    <form>
      <div className="mb-4">
        <label for="name" className="block text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label for="email" className="block text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label for="password" className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <label for="confirm-password" className="block text-gray-700 mb-1">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition"
      >
        Sign Up
      </button>
    </form>
    <div className="mt-6 text-center text-gray-600 text-sm">
      Already have an account?
      <a href="/login" className="text-blue-700 font-semibold hover:underline">Sign in</a>
    </div>
  </div>
</section>

    </>
  )
}

export default Registration