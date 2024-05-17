import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import CardWithImageSlider from './card';
import axios from 'axios';

const CardWithImageLeft = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [Listings, setListings] = useState([]);
  const totalPages = Math.ceil(Listings.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProperties = Listings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fetch All listings
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:3500/listings/All');
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listing :', error);
      }
    };
    fetchListings();
  }, []);

  return (
    <div className="w-full lg:w-2/3 p-0">
      <div className="flex items-center justify-between mb-4">
        <div className="mb-1"></div>
        <h4 className="text-xl font-bold mb-1 text-sky-900">Listings suiting your needs</h4>
        <div className="flex items-center">
          <select className="border border-gray-100 p-2 rounded">
            <option className='text-sky-900'>Sort By</option>
            <option className='text-sky-900'>Price-Low to High</option>
            <option className='text-sky-900'>Price-High to Low</option>
            <option className='text-sky-900'>Featured Listings First</option>
            <option className='text-sky-900'>Date-Old to New</option>
            <option className='text-sky-900'>Date-New to Old</option>
            <option className='text-sky-900'>Title-ASC</option>
            <option className='text-sky-900'>Title-DESC</option>
          </select>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-end">
        <div className="flex justify-end items-center flex-wrap">
          {paginatedProperties.map((listing, index) => (
            <div key={index} className="m-4 w-96">
              <CardWithImageSlider
                id={index}
                title={listing.title}
                price={listing.price}
                images={listing.images}
                listingType={listing.listingType}
                location={listing.location}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`bg-sky-900 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mr-2 ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <IoIosArrowBack />
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`bg-sky-900 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded ml-2 ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default CardWithImageLeft;
