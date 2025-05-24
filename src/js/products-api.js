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
