import ReactDOM from 'react-dom/client'
import './index.css'
import MainRoutes from './routes/router'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
     <MainRoutes />
  </BrowserRouter>

);
