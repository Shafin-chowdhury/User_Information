
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Users from './Users';

const Header = () => {
  const [idQuery, setIdQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        console.log('Search Query:', idQuery);
     
      const response = await fetch(`https://dummyjson.com/users?q=${idQuery}`);
      
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
   
    <div className='bg-green-200 text-center font-bold'>User Information Site
     


<div className="flex flex-col lg:flex-row lg:items-center">
  <form onSubmit={handleSearch} className="flex flex-col lg:flex-row lg:items-center lg:w-auto lg:mr-auto">
    <label htmlFor="default-search" className="mb-2 lg:mb-0 lg:mr-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative flex items-center lg:w-[400px]">
      <input type="search" id="default-search" value={idQuery} onChange={(e) => setIdQuery(e.target.value)} className="block w-full lg:w-[400px] p-4 pl-10 text-sm text-gray-600 border border-gray-600 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Users" required/>
      <button type="submit" className="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 absolute top-0 bottom-0 left-80 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
  </form>

  <div className="relative mt-4 lg:mt-0">
    <select disabled id="countries_disabled" className="block w-full lg:w-[400px] p-4 pl-10 text-sm text-gray-600 border   border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Sort By</option>
      <option value="name">Name</option>
      <option value="email">Email</option>
      <option value="companyName">Company Name</option>
      
    </select>
  </div>
</div>





      {loading && <p>Loading...</p>}
      {!loading && searchResults.length > 0 && (
        <div>
          {searchResults.map(users => (
            <div key={Users.id}>
 
              <Link to= {`/Users/${Users.id}`}>
                {users.firstName} {users.lastName}
              </Link>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Header;
















