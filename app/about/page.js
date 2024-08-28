import React from 'react'

const about = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12  text-white px-6">
    <div className="shadow-md rounded-lg p-8 max-w-4xl text-center bg-gray-800">
      <h1 className="text-5xl font-extrabold mb-8 text-yellow-400">About Get Me a Chai</h1>
      <p className="text-lg mb-6">
        Get Me a Chai is your go-to app for discovering the best chai spots in town. Whether you're a chai connoisseur or just looking for a cozy place to enjoy a cup, we've got you covered.
      </p>
      <p className="text-lg mb-6">
        Our mission is to bring chai lovers together, one cup at a time. We believe in the power of a good cup of chai to brighten your day and create connections.
      </p>
      <p className="text-lg mb-8">
        Join us on this journey to find the perfect chai, share your favorite spots, and connect with fellow chai enthusiasts.
      </p>
      
      <div className="my-12">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Our Team</h2>
        <p className="text-lg mb-4">
          Our team consists of passionate chai lovers and tech enthusiasts who believe in the power of community and a good cup of chai. We are dedicated to bringing you the best chai experience, one cup at a time.
        </p>
      </div>
      
      <div className="my-12">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Our Values</h2>
        <ul className="text-lg space-y-4">
          <li>🍃 <span className="font-semibold">Community:</span> We believe in the power of connections and building a community of chai lovers.</li>
          <li>🌱 <span className="font-semibold">Sustainability:</span> We support sustainable practices in the chai industry.</li>
          <li>💛 <span className="font-semibold">Passion:</span> Our love for chai drives everything we do.</li>
        </ul>
      </div>
      
      <div className="my-12">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-300">Our Services</h2>
        <p className="text-lg mb-4">
          We provide a platform for chai enthusiasts to discover, rate, and share their favorite chai spots. Whether you're looking for the best masala chai in town or a quiet spot to enjoy a cup, Get Me a Chai has you covered.
        </p>
      </div>
      
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-300">Contact Us</h2>
        <p className="text-lg">
          Have questions or suggestions? Reach out to us at <a href="mailto:contact@getmeachai.com" className="text-yellow-400 hover:underline">contact@getmeachai.com</a>.
        </p>
      </div>
    </div>
  </div>
  )
}

export default about

export const metadata = {
  title: 'About - Get Me A Chai',
}
