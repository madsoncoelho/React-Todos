import axios from 'axios';

const baseUrl = 'http://localhost:3001/todos';

async function getTodos(year, month) {
  const response = await axios.get(`${baseUrl}/?year=${year}&month=${month}`);

  const todos = response.data;
  return todos;
}

export { getTodos };