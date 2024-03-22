import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// layouts 
import RootLayout from "./layouts/RootLayout";


// pages
import Todos from './pages/todos/Todos';
import Contact from './pages/contact/Contact';


// styles
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Todos />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

function App() {
  return (
    

    <RouterProvider router={router} />
    
  );
}

export default App;
