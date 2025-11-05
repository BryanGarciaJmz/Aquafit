import '../App.css';
import { useState } from 'react';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="container contact">
      <h2>Contacto</h2>
      <p className="contact-hero">¿Tienes dudas o sugerencias? Escríbenos y con gusto te ayudamos.</p>
      <section className="contact-card">
        <form onSubmit={(e) => e.preventDefault()} aria-label="Formulario de contacto">
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" type="text" className="form-control" placeholder="Tu nombre" value={form.nombre} onChange={onChange} />
            </div>
            <div className="form-field">
              <label htmlFor="email">Correo electrónico</label>
              <input id="email" name="email" type="email" className="form-control" placeholder="tucorreo@ejemplo.com" value={form.email} onChange={onChange} />
            </div>
            <div className="form-field form-span-2">
              <label htmlFor="asunto">Asunto</label>
              <input id="asunto" name="asunto" type="text" className="form-control" placeholder="Motivo de tu mensaje" value={form.asunto} onChange={onChange} />
            </div>
            <div className="form-field form-span-2">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" className="form-control" rows={6} placeholder="Cuéntanos en qué podemos ayudarte" value={form.mensaje} onChange={onChange} />
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-detalle">Enviar mensaje</button>
          </div>
        </form>
      </section>
    </main>
  );
}