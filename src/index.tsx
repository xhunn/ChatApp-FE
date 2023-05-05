import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <div>Home</div> },

])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);