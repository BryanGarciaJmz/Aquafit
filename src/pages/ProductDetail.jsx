import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useState } from 'react';
import '../App.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(product?.tallas?.[0] ?? null);

  if (!product) {
    return (
      <main className="container">
        <p>Producto no encontrado.</p>
        <Link to="/">Volver</Link>
      </main>
    );
  }

  return (
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

          {product.tallas?.length ? (
            <div className="detalle-tallas">
              <strong>Tallas:</strong>
              <div className="tallas">
                {product.tallas.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`btn-talla ${t === tallaSeleccionada ? 'activa' : ''}`}
                    onClick={() => setTallaSeleccionada(t)}
                    aria-pressed={t === tallaSeleccionada}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <p className="detalle-descripcion">{product.descripcion}</p>
          <div className="detalle-actions">
            <button className="btn-detalle">Agregar al carrito</button>
            <Link to="/" className="btn-detalle">Volver a productos</Link>
          </div>
        </div>
      </section>
    </main>
  );
}