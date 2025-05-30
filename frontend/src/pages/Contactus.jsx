import React from 'react'

const Contactus = () => {
  return (
<>
<section className="bg-gray-100 py-12 min-h-screen">
  <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
    {/* <!-- Header --> */}
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
      <p className="text-gray-600">We're here to help! Fill out the form or reach us directly using the information below.</p>
    </div>
    <div className="flex flex-col md:flex-row gap-8">
      {/* <!-- Contact Form --> */}
      <form className="flex-1 space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" for="name">Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" for="email">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" for="message">Message</label>
          <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
      </form>
      {/* <!-- Contact Info --> */}
      <div className="flex-1 space-y-6">
        <div>
          <h3 className="font-semibold mb-1">Customer Support</h3>
          <p className="text-gray-700">Email: <a href="mailto:support@compustore.com" className="text-blue-600 hover:underline">support@compustore.com</a></p>
          <p className="text-gray-700">Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a></p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Our Address</h3>
          <p className="text-gray-700">
            CompuStore HQ
            123 Tech Avenue
            Silicon City, 12345
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.128 8.438 9.877v-6.987h-2.54V12h2.54v-1.356c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.631.771-1.631 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12"></path></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.73 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.98 4.07 7.13 1.64 4.16c-.37.64-.58 1.39-.58 2.18 0 1.51.77 2.85 1.93 3.63a4.27 4.27 0 0 1-1.94-.54v.05c0 2.11 1.5 3.87 3.49 4.27-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.55 1.71 2.15 2.95 4.05 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 24 4.59a8.49 8.49 0 0 1-2.54.7z"></path></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.513 2.564 5.78 2.293 7.146 2.23 8.412 2.172 8.8 2.16 12 2.16zm0-2.16C8.736 0 8.332.013 7.052.072 5.775.13 4.535.39 3.467 1.458 2.398 2.527 2.138 3.767 2.08 5.044.013 8.332 0 8.736 0 12s.013 3.668.072 4.948c.058 1.277.318 2.517 1.387 3.585 1.068 1.068 2.308 1.328 3.585 1.387C8.332 23.987 8.736 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.517-.318 3.585-1.387 1.068-1.068 1.328-2.308 1.387-3.585.059-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.318-2.517-1.387-3.585C19.465.39 18.225.13 16.948.072 15.668.013 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>    
)
}

export default Contactus