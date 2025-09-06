import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PieChartWithLeaderLines from './PieChartWithLeaderLines'
// import App from './App.jsx'
import Demo from './demo.jsx'
import PieChart from './PieChart.jsx'

// import Product from './Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Product /> */}
    {/* <Demo /> */}
    <PieChart />
    
    {/* <PieChartWithLeaderLines /> */}
  </StrictMode>,
)
