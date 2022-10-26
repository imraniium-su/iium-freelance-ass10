import { Toaster } from 'react-hot-toast';

import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './route/Router';

function App() {
  return (
    <div >
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
