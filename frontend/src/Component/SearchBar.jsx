
// chatgpt

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location.trim()) return;

    // ✅ Corrected Line
    navigate(`/listingpage1?location=${encodeURIComponent(location)}&guests=${guests}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2 bg-white rounded-full shadow-md p-2 max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Where to?"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 px-4 py-2 rounded-full focus:outline-none"
      />

      <input
        type="number"
        min="1"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className="w-20 px-3 py-2 rounded-full focus:outline-none"
      />

      <button
        type="submit"
        className="bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;



// chatgpt