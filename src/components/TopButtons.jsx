import React from 'react';

function TopButtons({ setQuery }) {
  const cities = [
    { id: 1, title: 'Delhi' },
    { id: 2, title: 'London' },
    { id: 3, title: 'Tokyo' },
    { id: 4, title: 'Toronto' },
    { id: 5, title: 'Sydney' },
  ];

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button key={city.id} className='text-white text-lg font-medium' onClick={() => setQuery(city.title)}>
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
