import NavBar from "./components/NavBar"
import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import SnapShootImages from "./components/SnapShootImages"

function App() {
  

  return (
    <main className="min-h-screen bg-gray-200 transition-colors duration-300 dark:bg-black/80">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/product/:id" element={<ProductPage />}/>
        <Route path="/snapshoots" element={<SnapShootImages />}/>
      </Routes>
    </main>
  )
}

export default App
