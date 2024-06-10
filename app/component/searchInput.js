import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ onSearch }) => {
  const [filter, setFilter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!filter)
      {
      return alert("Plese Field Are Not Allow Empty ")
    }
    onSearch(filter)
   
  };

  return (
    <form onSubmit={handleSubmit} className='formSearch'>
      <input className='searchInput'
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search by Categoery or Name or Description..."
      />
      <button className='submitSearch' type="submit">
         <FaSearch className="search-icon" />
      </button>
    </form>
  );
};

export default SearchInput;