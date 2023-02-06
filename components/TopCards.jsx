import { useEffect, useState } from 'react';
import { getGlobal } from '@/utils/clientApi';
import Spinner from './Spinner';

const TopCards = () => {
  const [global, setGlobal] = useState(null);

  useEffect(() => {
    getGlobal(setGlobal);
  }, []);

  console.log(global);

  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4 ">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full  border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          {global ? (
            <p className="text-2xl font-bold">
              {global?.active_cryptocurrencies}
            </p>
          ) : (
            <Spinner />
          )}

          <p className="text-gray-600">Active Cryptocurrencies</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          {global ? (
            <p className="text-2xl font-bold">
              $
              {new Intl.NumberFormat('de-DE').format(
                Object.values(global?.total_volume)
                .reduce((a, b) => a + b, 0)
              )}
            </p>
          ) : (
            <Spinner />
          )}

          <p className="text-gray-600">Total Trading Volume</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+11%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          {global ? (
            <p className="text-2xl font-bold">{global?.markets}</p>
          ) : (
            <Spinner />
          )}

          <p className="text-gray-600">Total Markets</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">+17%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
