import { useState } from 'react';
import CryptoList from '@/components/CryptoList';
import { GrSearch } from 'react-icons/gr';
import { HiMenuAlt2 } from 'react-icons/hi';

const Customers = ({ handleSidebar }) => {
  const [searchWord, setSearchWord] = useState('');

  const change = event => {
    setSearchWord(event.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="flex flex-row-reverse sm:justify-between justify-center p-4 gap-4">
        <h2 className="sm:block hidden font-semibold text-lg">Search Crypto</h2>
        <div className="relative flex items-center gap-4">
          <HiMenuAlt2
            size={30}
            onClick={handleSidebar}
            className="cursor-pointer"
          />
          <input
            type="text"
            onChange={change}
            placeholder="Search..."
            className="py-2 px-4 relative border-[1px] border-purple-300 rounded-lg outline-none"
          />
          <GrSearch className="absolute right-2 top-3 " />
        </div>
      </div>
      <CryptoList searchWord={searchWord} />
    </div>
  );
};

export default Customers;
