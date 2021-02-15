import React, { useEffect, useState } from 'react';

import * as api from './api/apiService';
import ButtonContainer from './components/button/ButtonContainer';
import Summary from './components/summary/Summary';
import Todos from './components/todo/Todos';

const years = ['2019', '2020', '2021'];
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'];

export default function App() {
  const [todos, setTodos] = useState([]);
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);

  
  useEffect(() => {
    const getTodos = async () => {
      const year = years[selectedYear];
      const month = selectedMonth + 1;
      const filteredTodos = await api.getTodos(year, month);

      setTodos(filteredTodos);
    };

    getTodos();
  }, [selectedYear, selectedMonth]);

  const handleYearButtonClick = (index) => {
    setSelectedYear(index);
  };

  const handleMonthButtonClick = (index) => {
    setSelectedMonth(index);
  };

  return (
    <div className="container">
      <h1 className="center">React Todos</h1>

      <ButtonContainer selectedButton={selectedYear} buttonSet={years}
        onButtonClick={handleYearButtonClick}/>
      <ButtonContainer selectedButton={selectedMonth} buttonSet={months}
        onButtonClick={handleMonthButtonClick} />
      
      <Summary tasksList={todos} />

      <Todos todosList={todos} />
    </div>
  );
}
