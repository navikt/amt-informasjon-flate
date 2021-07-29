import React, { useEffect, useState } from 'react';
import Toggle from './Toggle';
import './Toggle.less';

function DarkModeToggle() {
  const [darkmode, setDarkmode] = useState(localStorage.getItem('darkmode') === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('darkmode', darkmode);
    localStorage.setItem('darkmode', darkmode + '');
  }, [darkmode]);

  return (
    <div className="dark-mode-toggle">
      <button type="button">☀</button>
      <Toggle checked={darkmode} onChange={() => setDarkmode(!darkmode)} />
      <button type="button">☾</button>
    </div>
  );
}

export default DarkModeToggle;
