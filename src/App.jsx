import './App.css'

function App() {
  const productos = [
    {
      id: 1,
      nombre: "Gafas de Natación",
      descripcion: "Protección UV y anti-empañamiento",
  precio: 25.00,
  imagen: "images/gafas.jpg"
    },
    {
      id: 2,
      nombre: "Tabla de Surf",
      descripcion: "Para principiantes y expertos",
  precio: 350.00,
  imagen: "/images/tabla-surf.jpg"
    },
    {
      id: 3,
      nombre: "Aletas de Buceo",
      descripcion: "Cómodas y resistentes",
  precio: 45.00,
  imagen: "/images/aletas.jpg"
    },
    {
      id: 4,
      nombre: "Traje de Neopreno",
      descripcion: "Máxima comodidad térmica",
  precio: 120.00,
  imagen: "/images/traje-neopreno.jpg"
    },
    {
      id: 5,
      nombre: "Kit de Snorkel",
      descripcion: "Máscara y tubo incluidos",
  precio: 55.00,
  imagen: "/images/snorkel.jpg"
    },
    {
      id: 6,
      nombre: "Chaleco Salvavidas",
      descripcion: "Seguridad certificada",
  precio: 40.00,
  imagen: "/images/chaleco.jpg"
    }
  ];

  const handleAgregar = (nombre) => {
    alert(`${nombre} agregado al carrito`);
  };

  return (
    <>
      <header id="inicio">
        <h1>AquaFit</h1>
        <p>Nada como estar a la moda</p>
      </header>

      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <main className="container" id="productos">
        <h2>Productos Destacados</h2>

        <div className="productos">
          {productos.map(producto => (
            <div key={producto.id} className="producto">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="producto-img"
                onError={(e) => { e.currentTarget.src = '/vite.svg'; }}
              />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <div className="precio">${producto.precio.toFixed(2)}</div>
              <button onClick={() => handleAgregar(producto.nombre)}>
                Agregar
              </button>
            </div>
          ))}
        </div>
      </main>

  <footer id="contacto">
        <p>AquaFit &copy; 2025 - Todos los derechos reservados</p>
        <p>Email: info@aquafit.com | Tel: (XXX) 123-4567</p>
      </footer>
    </>
  )
}

export default App
