import { useEffect, useState } from 'react';
import { getNews } from '../utils/clientApi';
import { HiMenuAlt2 } from 'react-icons/hi';

const News = ({ handleSidebar }) => {
  const [news, setNews] = useState();

  useEffect(() => {
    getNews(setNews);
  }, []);

  console.log(news);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex p-4 gap-4">
        <HiMenuAlt2
          size={30}
          onClick={handleSidebar}
          className="cursor-pointer"
        />
        <h2 className="font-semibold text-lg" onClick={handleSidebar}>
          News
        </h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-between cursor-pointer">
            {news?.map((news, id) => (
              <a key={id} href={news.link} target="_blank">
                <div className="sm:w-[85%] w-full bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-4 ">
                  <img
                    src={news.imgURL}
                    alt="img"
                    width={150}
                    className="rounded-lg"
                  />
                  <h2 className="font-semibold text-lg mt-2">{news.source}</h2>
                  <h3>{news.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
