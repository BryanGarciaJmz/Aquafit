import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import '../App.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <main className="container">
        <p>Producto no encontrado.</p>
        <Link to="/">Volver</Link>
      </main>
    );
  }

  return (
    <>
      <header id="inicio">
        <h1>Detalle del Producto</h1>
        <p>Información completa del artículo</p>
      </header>

      <nav>
        <Link to="#inicio">Inicio</Link>
        <Link to="/">Productos</Link>
        <a href="#contacto">Contacto</a>
      </nav>

      <main className="container">
        <section className="detalle">
          <div className="detalle-imagen">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="detalle-img"
              onError={(e) => (e.currentTarget.src = '/vite.svg')}
            />
          </div>
          <div className="detalle-info">
            <h2>{product.nombre}</h2>
            <p className="detalle-precio">${product.precio.toFixed(2)}</p>
            <p><strong>Talla:</strong> {product.talla}</p>
            <p className="detalle-descripcion">{product.descripcion}</p>
            <button className="btn-add">Agregar al carrito</button>
            <div style={{ marginTop: '16px' }}>
              <Link to="/">Volver a productos</Link>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacto">
        <p>AquaFit &copy; 2025 - Todos los derechos reservados</p>
        <p>Email: info@aquafit.com | Tel: (555) 123-4567</p>
      </footer>
    </>
  );
}