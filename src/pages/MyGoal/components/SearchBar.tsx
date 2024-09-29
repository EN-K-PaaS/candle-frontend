import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSearch(query);
  };

  return (
    <form onSubmit={handleQuerySubmit} className="relative flex items-center">
      <div className="flex items-center h-8 px-4 py-2 mr-2 bg-white border border-gray-300 rounded-lg">
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search"
          className="focus:outline-none"
        />
        <img
          src="/icons/search-icon.png"
          className="w-4 h-4 cursor-pointer"
          alt="검색 아이콘"
          onClick={() => handleQuerySubmit}
        />
      </div>
    </form>
  );
};

export default SearchBar;
