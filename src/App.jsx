import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
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
  const [categoria, setCategoria] = useState('')
  const [precio, setPrecio] = useState('')
  const [tallas, setTallas] = useState(new Set())

  const tallasDisponibles = ['Única','S','M','L','XL']

  const toggleTalla = (t) => {
    setTallas((prev) => {
      const next = new Set(prev)
      if (next.has(t)) next.delete(t); else next.add(t)
      return next
    })
  }

  const resetFiltros = () => {
    setCategoria('')
    setPrecio('')
    setTallas(new Set())
  }

  const filtrados = useMemo(() => {
  return products.filter((p) => {
      if (categoria && p.categoria !== categoria) return false
      if (precio) {
        if (precio === '-50' && !(p.precio < 50)) return false
        if (precio === '50-100' && !(p.precio >= 50 && p.precio <= 100)) return false
        if (precio === '>100' && !(p.precio > 100)) return false
      }
      if (tallas.size > 0) {
        const tiene = p.tallas?.some((t) => tallas.has(t))
        if (!tiene) return false
      }
      return true
    })
  }, [categoria, precio, tallas])

  return (
    <main className="container" id="productos">
      <h2>Productos Destacados</h2>

      <section className="filtros" aria-label="Filtros de productos">
        <div className="filtros-row">
          <div className="filtro-item">
            <label htmlFor="categoria">Categoría</label>
            <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Todas</option>
              <option value="natacion">Natación</option>
              <option value="surf">Surf</option>
              <option value="buceo">Buceo</option>
              <option value="accesorios">Accesorios</option>
            </select>
          </div>

          <div className="filtro-item">
            <label htmlFor="precio">Precio</label>
            <select id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)}>
              <option value="">Todos</option>
              <option value="-50">Menos de $50</option>
              <option value="50-100">$50 - $100</option>
              <option value=">100">Más de $100</option>
            </select>
          </div>

          <div className="filtro-item">
            <label>Tallas</label>
            <div className="chips">
              {tallasDisponibles.map(t => {
                const active = tallas.has(t)
                return (
                  <button
                    key={t}
                    type="button"
                    className="chip"
                    aria-pressed={active}
                    onClick={() => toggleTalla(t)}
                  >
                    {t}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        <div className="form-actions" style={{ marginTop: 12 }}>
          <button type="button" className="btn-detalle" onClick={resetFiltros}>
            Limpiar filtros
          </button>
        </div>
      </section>
      <div className="productos">
        {filtrados.map((p) => (
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
