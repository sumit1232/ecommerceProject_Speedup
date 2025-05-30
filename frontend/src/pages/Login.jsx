import React from 'react'

const Login = () => {
  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
    <div className="mb-6 text-center">
      <h2 className="text-3xl font-bold mb-2 text-blue-700">Welcome Back</h2>
      <p className="text-gray-600">Sign in to your account</p>
    </div>
    <form>
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
      <div className="flex items-center justify-between mb-6">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox text-blue-600" />
          <span className="ml-2 text-gray-700 text-sm">Remember me</span>
        </label>
        <a href="#" className="text-blue-600 hover:underline text-sm">Forgot password?</a>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition"
      >
        Sign In
      </button>
    </form>
    <div className="mt-6 text-center text-gray-600 text-sm">
      Don't have an account?
      <a href="registration" className="text-blue-700 font-semibold hover:underline">Sign up</a>
    </div>
  </div>
</section>

    </>
  )
}

export default Login