import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="producto">
      <Link to={`/producto/${product.id}`}>
        <img
          src={product.imagen}
          alt={product.nombre}
          className="producto-img"
          onError={(e) => {
            e.currentTarget.src = '/vite.svg';
          }}
        />
      </Link>
      <h3>{product.nombre}</h3>
      <p className="precio">${product.precio.toFixed(2)}</p>
      <div className="producto-actions">
        <Link to={`/producto/${product.id}`} className="btn-detalle">Ver detalle</Link>
      </div>
    </div>
  );
}