// File: src/App.tsx
import React from 'react';
import AppRouter from './routes/AppRouter';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;