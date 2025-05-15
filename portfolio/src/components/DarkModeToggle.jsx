
import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    document.body.classList.contains('dark')
  );

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      style={{
        background: isDark ? '#333' : '#ddd',
        color: isDark ? '#fff' : '#000',
        border: 'none',
        borderRadius: '20px',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default DarkModeToggle;
