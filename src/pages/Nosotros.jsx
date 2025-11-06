import '../App.css';

export default function Nosotros() {
  return (
    <main className="container about-container">
      <section className="about">
        <h2>Nosotros</h2>
        <p className="about-hero">Vivimos el agua. Creamos experiencias seguras, sostenibles y divertidas para que más personas disfruten del deporte acuático con productos confiables y un servicio cercano.</p>
        <div className="about-grid">
          <article className="about-card">
            <h3>Nuestra historia</h3>
            <p>
              Nacimos en 2015 a orillas del Pacífico con una misión clara: acercar el
              deporte acuático a todas las personas. Empezamos como una pequeña tienda
              familiar y, gracias a la comunidad, hoy somos una marca que impulsa la vida
              activa junto al mar, ríos y piscinas.
            </p>
            <p>
              Creemos en la calidad, la seguridad y la sostenibilidad. Por eso
              seleccionamos cuidadosamente cada producto, trabajamos con proveedores
              responsables y escuchamos a nuestros clientes para mejorar día a día.
            </p>
          </article>

          <article className="about-card">
            <h3>Nuestros valores</h3>
            <ul className="values">
              <li>Pasión por el agua y el deporte</li>
              <li>Seguridad y confianza en cada artículo</li>
              <li>Sostenibilidad y respeto por los océanos</li>
              <li>Servicio cercano y honesto</li>
              <li>Innovación constante para mejores experiencias</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}