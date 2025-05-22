// chatGpt

import React, { useState } from 'react';
import { FaGlobe, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdCurrencyRupee } from 'react-icons/md';

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-100 px-16 py-12 text-base text-gray-600 mt-20">
      <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600">
        Inspiration for future getaways
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b pb-8">
        <div>
          <h3 className="font-bold text-lg mb-3">Unique stays</h3>
          <ul className="space-y-2">
            <li>Yurt Rentals - IND</li>
            <li>Farm Houses - IND</li>
            <li>Cottage Rentals - IND</li>
            {showMore && (
              <>
                <li>Castle Rentals - IND</li>
                <li>Holiday Cottages - IND</li>
                <li>Mansion Rentals - IND</li>
              </>
            )}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Categories</h3>
          <ul className="space-y-2">
            <li>Cabin Rentals - IND</li>
            <li>Luxury Cabins - IND</li>
            <li>Villa Rentals - IND</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Support</h3>
          <ul className="space-y-2">
            <li>Help Centre</li>
            <li>Wanderlust Haven Cover</li>
            <li>Cancellation options</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Hosting</h3>
          <ul className="space-y-2">
            <li>wanderlust Haven your home</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          className="bg-black text-white px-6 py-3 rounded-full transition transform hover:scale-105"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-500 border-t mt-12 space-y-4 md:space-y-0">
        <p>© 2025 Wanderlust Haven · Privacy · Terms · Sitemap</p>
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1 hover:text-gray-700">
            <FaGlobe size={16} />
            <span>English (IN)</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-gray-700">
            <MdCurrencyRupee size={18} />
            <span>INR</span>
          </button>
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://www.instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;

// ChatGpt