import { useState, useEffect } from 'react';
import { getCoinData } from '@/utils/clientApi';
import { MdOutlineHttp } from 'react-icons/md';
import { SiAiohttp } from 'react-icons/si';

const CryptoList = ({ searchWord }) => {
  const [listOfCoins, setListOfCoins] = useState([]);

  const [fill, setFill] = useState([]);

  useEffect(() => {
    getCoinData(50, setListOfCoins);
  }, []);

  const filteredCoins = listOfCoins.filter(coin => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  useEffect(() => {
    setFill(filteredCoins.slice(0, 10));
  }, [searchWord, listOfCoins]);

  const addCoins = () => {
    if (fill.length === 10) {
      setFill(filteredCoins.slice(0, 20));
    }
    if (fill.length === 20) {
      setFill(filteredCoins.slice(0, 30));
    }
    if (fill.length === 30) {
      setFill(filteredCoins.slice(0, 40));
    }
    if (fill.length === 40) {
      setFill(filteredCoins.slice(0, 50));
    }
  };

  return (
    <div className="p-4 flex">
      <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto ">
        <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
          <span>Name</span>
          <span className="sm:text-left text-right">Price</span>
          <span className="hidden md:grid">Symbol</span>
          <span className="hidden sm:grid">1w/change</span>
        </div>

        <ul>
          {fill.map((coin, id) => (
            <li
              key={id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between"
            >
              <div className="flex items-center">
                <div className="bg-white p-3 rounded-lg">
                  <img src={coin.icon} alt="icon" width={37} />
                </div>

                <p className="pl-4">{coin.name}</p>
              </div>
              <p className="text-gray-600 sm:text-left text-right">
                ${coin.price.toFixed(2)}
              </p>
              <p className="hidden md:grid">{coin.symbol}</p>
              <div className="sm:flex hidden justify-between items-center">
                <img
                  src={`https://static.coinstats.app/sparks/${coin.id}_1w.png `}
                  alt="graph"
                />
                <a href={coin.websiteUrl} target="_blank">
                  <MdOutlineHttp size={28} />
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center py-6">
          <button
            className="bg-purple-500 p-3 rounded-lg text-white"
            onClick={addCoins}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoList;
