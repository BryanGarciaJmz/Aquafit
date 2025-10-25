import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { products } from './data/products'
import ProductCard from './components/ProductCard'
import ProductDetail from './pages/ProductDetail'

function Layout({ children }) {
  return (
    <>
      <header id="inicio">
        <h1>AquaFit</h1>
        <p>Tu tienda de artículos deportivos acuáticos</p>
      </header>

      <nav>
        <Link to="/">Inicio</Link>
        <a href="#contacto">Contacto</a>
      </nav>

      {children}

      <footer id="contacto">
        <p>AquaFit &copy; 2025 - Todos los derechos reservados</p>
        <p>Email: info@aquafit.com | Tel: (555) 123-4567</p>
      </footer>
    </>
  )
}

function HomePage() {
  return (
    <main className="container" id="productos">
      <h2>Productos Destacados</h2>
      <div className="productos">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
