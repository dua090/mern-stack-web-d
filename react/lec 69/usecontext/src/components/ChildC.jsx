import React, { useContext } from 'react';
import { UserContext, ThemeContext } from '../App';

const ChildC = () => {
  const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button onClick={toggleTheme}>Change Theme</button>
      <p>Theme: {theme}</p>
      <p>Data: {user.name}</p>
    </div>
  );
};

export default ChildC;
