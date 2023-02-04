import { useEffect, useState } from 'react';
import { getCoinData } from '@/utils/clientApi';

const RecentOrders = () => {
  const [coins, setCoins] = useState(null);

  useEffect(() => {
    getCoinData(10, setCoins);
  }, []);

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-y-scroll">
      <h1>Top 10 Crypto</h1>
      <ul>
        {coins?.map((coin, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  flex items-center cursor-pointer"
          >
            <div className="bg-white rounded-lg p-3">
              <img src={coin.icon} width={40} height={40} alt={coin.name} />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">
                ${coin.price.toFixed(2)}
              </p>
              <p className="text-gray-500 text-sm">{coin.name}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {/* {order.date} */}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
