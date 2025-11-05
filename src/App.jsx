import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import { products } from './data/products'
import ProductCard from './components/ProductCard'
import ProductDetail from './pages/ProductDetail'

function Layout({ children }) {
  return (
    <>
      <header id="inicio">
        <div className="header-row">
          <img className="logo" src="/images/logo.png" alt="Logo de AquaFit" />
          <div className="brand">
            <h1>AquaFit</h1>
            <p>Tu tienda de artículos deportivos acuáticos</p>
          </div>
        </div>
      </header>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/contacto">Contacto</Link>
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

      <section className="filtros" aria-label="Filtros de productos">
        <div className="filtros-row">
          <div className="filtro-item">
            <label htmlFor="categoria">Categoría</label>
            <select id="categoria" defaultValue="">
              <option value="">Todas</option>
              <option value="natacion">Natación</option>
              <option value="surf">Surf</option>
              <option value="buceo">Buceo</option>
              <option value="accesorios">Accesorios</option>
            </select>
          </div>

          <div className="filtro-item">
            <label htmlFor="precio">Precio</label>
            <select id="precio" defaultValue="">
              <option value="">Todos</option>
              <option value="-50">Menos de $50</option>
              <option value="50-100">$50 - $100</option>
              <option value=">100">Más de $100</option>
            </select>
          </div>

          <div className="filtro-item">
            <label>Tallas</label>
            <div className="chips">
              {['Única','S','M','L','XL'].map(t => (
                <button key={t} type="button" className="chip" aria-pressed="false">{t}</button>
              ))}
            </div>
          </div>
        </div>
      </section>
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
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
