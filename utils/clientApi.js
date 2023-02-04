import axios from 'axios';

export const getGlobal = async setGlobal => {
  try {
    const response = await axios('https://api.coingecko.com/api/v3/global');
    const data = await setGlobal(response.data.data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCoinData = async (limit, setState) => {
  try {
    const response = await axios.get(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=${limit} `
    );
    const data = await setState(response.data.coins);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getNews = async setState => {
  try {
    const response = await axios(
      'https://api.coinstats.app/public/v1/news/trending?skip=0&limit=20'
    );
    const data = await setState(response.data.news);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
