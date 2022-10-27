import { Toaster } from 'react-hot-toast'; import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './route/Router';
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider/AuthProvider';

function App() {
  const { theme } = useContext(AuthContext)
  return (
    <div id={theme}>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
