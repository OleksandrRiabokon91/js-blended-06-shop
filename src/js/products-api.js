// Функції для роботи з бекендом
// запит до ендпоінта
import axios from 'axios';
export async function getCategory(query) {
  const baseURL = 'https://dummyjson.com/products';
  const endPoint = '/category-list';
  const url = baseURL + endPoint;

  const res = await axios.get(url);
  return res.data;
}

export const getProducts = async (currentPage = 1) => {
  const skip = (currentPage - 1) * 12;
  const url = `https://dummyjson.com/products?limit=12&skip=${skip}`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log('Товари не дійшли з серверу:', error);
  }
};
