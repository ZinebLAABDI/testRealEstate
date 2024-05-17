// SearchFilters.js
import React, { useState } from 'react';
import { CiSliderHorizontal } from "react-icons/ci";
import { DatePicker, Space } from 'antd';
import 'antd/dist/reset.css';
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react';
// import '@fortawesome/fontawesome-free/css/all.css';
import './stylecss.css'

const SearchFilters = () => {
    const [forSale, setForSale] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All'); // State for the selected radio button
  const [propertyTypeDropdown, setPropertyTypeDropdown] = useState(false); // State for property type dropdown visibility
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]); // State for selected property types
  const [priceRangeDropdown, setPriceRangeDropdown] = useState(false); // State for price range dropdown visibility
  const [priceRange, setPriceRange] = useState([0, 100000]); // State for selected price range
  const [isDragging, setIsDragging] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
     // Handler for toggling the "For Sale" dropdown
  const toggleForSaleDropdown = () => {
    setForSale(!forSale);
    if (propertyTypeDropdown) {
      setPropertyTypeDropdown(false); // Close property type dropdown if open
    }
    if (priceRangeDropdown) {
      setPriceRangeDropdown(false); // Close price range dropdown if open
    }
  };
  const handleDoneButtonClick = () => {
    if (selectedStatus === 'Vacation') {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
    }
  };
  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedStatus(value);
    if (value === 'Vacation') {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
    }
  };
  const onChange = (dates) => {
    if (dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }
  };

  

  // Handler for toggling the "Property Type" dropdown
  const togglePropertyTypeDropdown = () => {
    setPropertyTypeDropdown(!propertyTypeDropdown);
    if (forSale) {
      setForSale(false); // Close for sale dropdown if open
    }
    if (priceRangeDropdown) {
      setPriceRangeDropdown(false); // Close price range dropdown if open
    }
  };
  // Handler for selecting property types
  const handlePropertyTypeChange = (e) => {
    const value = e.target.value;
    if (selectedPropertyTypes.includes(value)) {
      setSelectedPropertyTypes(selectedPropertyTypes.filter(type => type !== value));
    } else {
      setSelectedPropertyTypes([...selectedPropertyTypes, value]);
    }
  };
 

  // Handler for toggling the "Price Range" dropdown
  const togglePriceRangeDropdown = () => {
    setPriceRangeDropdown(!priceRangeDropdown);
    if (forSale || propertyTypeDropdown) {
      setForSale(false); // Close for sale dropdown if open
      setPropertyTypeDropdown(false); // Close property type dropdown if open
    }
  };
  const handlePriceRangeChange = (values) => {
     const [min, max] = values;
    setPriceRange([min, max]);
  };
  const handleSliderMouseDown = () => {
    setIsDragging(true);
  };
  const handleSliderMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex justify-center p-4 border-b border-gray-300">
    <div className=" flex items-center gap-6 ">
      <div className="relative flex  items-center">
        <input
          type="text"
          placeholder="Enter an address, neighborhood, city, or ZIP"
          className="search-bar-input flex justify-start items-center pl-1 pr-10 py-1 border border-gray-300 rounded-lg shadow-sm w-96 text-lg"
        />
         <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <i className="fas fa-search text-white bg-orange-500 p-2 rounded-full"></i>
        </span>
      </div>

        <div className="flex gap-9 items-center" style={{ zIndex: 1 }}>
          <div className="relative ">
          <button
            type="button"
            className={`open-btn mb15 dropdown-toggle show border border-gray-300 rounded-lg text-sky-900 shadow-sm w-36 h-9 text-lg ${forSale ? 'active' : ''}`}
            onClick={toggleForSaleDropdown}
          >
              For Sale <i className="fas fa-angle-down ms-6"></i>
            </button>
            {forSale && (
            <div className="dropdown-menu show absolute mt-4 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="widget-wrapper bdrb1 pb-2 pl-2">
                <h6 className="list-title font-bold text-sky-900">Listing Status</h6>
                <div className="radio-element">
                  <div className="form-check d-flex align-items-center mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="listingStatus"
                      value="All"
                      checked={selectedStatus === 'All'}
                      onChange={handleRadioChange}
                    />
                    <label className="form-check-label ml-2" htmlFor="flexRadioDefault3">
                      All
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="listingStatus"
                      value="Buy"
                      checked={selectedStatus === 'Buy'}
                      onChange={handleRadioChange}
                    />
                    <label className="form-check-label ml-2" htmlFor="flexRadioDefault1">
                      Buy
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="listingStatus"
                      value="Rent"
                      checked={selectedStatus === 'Rent'}
                      onChange={handleRadioChange}
                    />
                    <label className="form-check-label ml-2" htmlFor="flexRadioDefault2">
                      Rent
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="listingStatus"
                      value="Vacation"
                      checked={selectedStatus === 'Vacation'}
                      onChange={handleRadioChange}
                    />
                    <label className="form-check-label ml-2" htmlFor="flexRadioDefault2">
                      Vacation
                    </label>
                  </div>
                </div>
              </div>
              <div className="text-end mt-2 pr-2">
                <button
                  type="button"
                  className="done-btn ud-btn btn-thm drop_btn bg-sky-900 text-gray-100 hover:bg-gray-100 hover:text-sky-900 font-bold w-full py-1 w-14 rounded-lg"
                  onClick={handleDoneButtonClick}
                >
                  Done
                </button>
              </div>
            </div>
          )}
          </div>
          {/* New dropdown for property types */}
          <div className="relative">
            <button type="button" className={`open-btn mb15 dropdown-toggle show border border-gray-300 rounded-lg text-sky-900 shadow-sm w-36 h-9 text-lg flex items-center justify-center`} onClick={togglePropertyTypeDropdown}>
              Property <i className="fas fa-angle-down ms-2"></i>
            </button>
            {propertyTypeDropdown && (
              <div className="dropdown-menu show absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="widget-wrapper bdrb1 pb-2 pl-2">
                  <h6 className="list-title font-bold text-sky-900">Property Type</h6>
                  <div className="checkbox-element">
                    <div className="form-check d-flex align-items-center mb-2">
                      <input className="form-check-input" type="checkbox" name="propertyType" value="All" checked={selectedPropertyTypes.includes('All')} onChange={handlePropertyTypeChange} />
                      <label className="form-check-label ml-2" htmlFor="All">All</label>
                    </div>
                    <div className="form-check d-flex align-items-center mb-2">
                      <input className="form-check-input" type="checkbox" name="propertyType" value="Houses" checked={selectedPropertyTypes.includes('Houses')} onChange={handlePropertyTypeChange} />
                      <label className="form-check-label ml-2" htmlFor="Houses">Houses</label>
                    </div>
                    <div className="form-check d-flex align-items-center mb-2">
                      <input className="form-check-input" type="checkbox" name="propertyType" value="Apartment" checked={selectedPropertyTypes.includes('Apartment')} onChange={handlePropertyTypeChange} />
                      <label className="form-check-label ml-2" htmlFor="apartment">Apartments</label>
                    </div>
                    <div className="form-check d-flex align-items-center mb-2">
                      <input className="form-check-input" type="checkbox" name="propertyType" value="Villa" checked={selectedPropertyTypes.includes('Villa')} onChange={handlePropertyTypeChange} />
                      <label className="form-check-label ml-2" htmlFor="Villa">Villa</label>
                    </div>
                    <div className="form-check d-flex align-items-center mb-2">
                      <input className="form-check-input" type="checkbox" name="propertyType" value="Lands" checked={selectedPropertyTypes.includes('Lands')} onChange={handlePropertyTypeChange} />
                      <label className="form-check-label ml-2" htmlFor="Lands">Lands</label>
                    </div>
                    {/* Add more property types as needed */}
                  </div>
                </div>
                <div className="text-end mt-2 pr-2">
                  <button type="button" className="done-btn ud-btn btn-thm drop_btn bg-sky-900 text-gray-100 hover:bg-gray-100 hover:text-sky-900 font-bold w-full w-14 py-1 rounded-lg">Done</button>
                </div>
              </div>
            )}
          </div>
          {/* Price Range dropdown... */}
          <div className="relative">
            <button type="button" className={`open-btn mb15 dropdown-toggle show border border-gray-300 rounded-lg text-sky-900 shadow-sm w-36 h-9 text-lg flex items-center justify-center`} onClick={togglePriceRangeDropdown}>
            Price <CiSliderHorizontal className="ml-2" />
            </button>
            {priceRangeDropdown && (
              <div className="dropdown-menu show absolute mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="widget-wrapper p-4 ">
                  <h6 className="list-title font-bold mb-2 text-sky-900">Price Range</h6>
                  {/* Slider for price range */}
                  {/* Slider for price range */}
                  <RangeSlider
            aria-label={['min', 'max']}
            colorScheme="blue"
            defaultValue={priceRange}
            min={0}
            max={1000000}
            onChange={(values) => handlePriceRangeChange(values)}
            onMouseDown={handleSliderMouseDown}
            onMouseUp={handleSliderMouseUp}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <div className="flex justify-between">
            <input 
              type="text" 
              placeholder='0 MAD'
              value={priceRange[0]} 
              onChange={(e) => handlePriceRangeChange([e.target.value, priceRange[1]])} 
              className="w-20 border border-gray-300 rounded-md p-1 text-center" 
            />
            <span className="self-center">-</span>
            <input 
              type="text" 
              placeholder='100000 MAD'
              value={priceRange[1]} 
              onChange={(e) => handlePriceRangeChange([priceRange[0], e.target.value])} 
              className="w-20 border border-gray-300 rounded-md p-1 text-center" 
            />
          </div>
                </div>
                <div className="text-right p-4">
                  <button type="button" className="done-btn ud-btn btn-thm drop_btn bg-sky-900 text-gray-100 hover:bg-gray-100 hover:text-sky-900  font-bold w-full w-14 py-1 rounded-lg">Done</button>
                </div>
              </div>
            )}
          </div>
          </div>
          {/* Date pickers */}
          {showDatePicker && (
      <div className="flex gap-4 items-center">
        {/* Check-in Date */}
        <div className="text-center">
          <DatePicker
            onChange={onChange}
            className="open-btn mb15 dropdown-toggle show border border-gray-300 rounded-full shadow-sm w-36 h-9 text-lg flex items-center justify-center"
            showPopperArrow={false}
            popperModifiers={{
              offset: {
                enabled: true,
                offset: '0, 10'
              }
            }}
            placeholder="Check In Date"
          />
        </div>
        {/* Check-out Date */}
        <div className="text-center">
          <DatePicker
            onChange={onChange}
            className="open-btn mb15 dropdown-toggle show border border-gray-300 rounded-full shadow-sm w-36 h-9 text-lg flex items-center justify-center"
            showPopperArrow={false}
            popperModifiers={{
              offset: {
                enabled: true,
                offset: '0, 10'
              }
            }}
            placeholder="Check Out Date"
          />
        </div>
    </div>
  )}

        <div className='flex  items-center gap-2 '>
            <button className='bg-sky-800 hover:bg-gray-50 text-white font-bold w-32 py-1 rounded-lg'>
            <span className="text-gray-50 hover:text-sky-900 gap-9">Search</span>
            </button>
        </div>
        </div>
      </div>
  );
};

export default SearchFilters;