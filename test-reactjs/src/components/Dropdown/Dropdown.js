import React, { useState, useEffect } from 'react';
import '../../assets/css/Dropdown.css';
import iconDown from '../../assets/media/chevron_down.png'
import iconUp from '../../assets/media/chevron_up.png'

function Dropdown({url}) {
  const [fruits, setFruits] = useState([]);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setFruits(data.data.fruits);
        setFilteredFruits(data.data.fruits);
      })
      .catch(error => {
        console.error('Error fetching fruits:', error);
      });
  }, []);

  useEffect(() => {
    // Filter fruits based on search query
    const filtered = fruits.filter(fruit =>
      fruit.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFruits(filtered);
  }, [fruits, searchQuery]);

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectFruit = fruit => {
    setSearchQuery(fruit);
    setIsDropdownOpen(false);
  };

  const renderFruits = () => {
    if (filteredFruits.length === 0) {
      return <p>No items were found.</p>;
    }

    return filteredFruits.map(fruit => (
      <div key={fruit} name={fruit} onClick={() => selectFruit(fruit)} className="dropdown-item">
        {fruit}
      </div>
    ));
  };

  return (
    <div className="dropdown-container">
        <div className="dropdown">
            {searchQuery === '' && !isDropdownOpen ? (
                <div className='dropdown-header' onClick={toggleDropdown}>
                    <span className="dropdown-placeholder">Select an item</span>
                    <img src={iconDown} />
                </div>
            ) : 
            (
                <div className='dropdown-header'>
                    <input
                        type="text"
                        placeholder='This is a input search'
                        className="dropdown-search-input"
                        value={searchQuery}
                        onChange={handleSearch}
                        autoFocus
                        name='dropSearch'
                    />
                    <img src={iconUp} onClick={toggleDropdown} />
                </div>
            )}
            {isDropdownOpen && (
                <div className="dropdown-list">
                    {renderFruits()}
                </div>
            )}
        </div>
    </div>
  );
}

export default Dropdown;
