import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Contacto = () => {
  const [contactos, setContactos] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    detalle: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Función para obtener y mostrar los contactos desde Firestore
  const fetchContactos = async () => {
    try {
      const contactosCollection = collection(db, 'contactos');
      const querySnapshot = await getDocs(contactosCollection);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setContactos(data);
    } catch (error) {
      console.error('Error al obtener contactos: ', error);
    }
  };

  useEffect(() => {
    fetchContactos();
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'contactos'), form);
      setSubmitted(true);
      setForm({
        nombre: '',
        correo: '',
        telefono: '',
        detalle: ''
      });
      fetchContactos(); // Actualizar la lista de contactos después de enviar
    } catch (error) {
      console.error('Error al enviar el formulario: ', error);
    }
  };

  return (
    <div className="contacto-container">
      <div className="ubicaciones">
        <h2>Ubicaciones de Sucursales en Cochabamba</h2>
        <ul>
          <li className="vertical-text">Sucursal 1: Edificio SuperMall, Avenida Blanco Galindo, Planta Baja, oficina, 24, casi esquina</li>
          <li className="vertical-text">Sucursal 2: Edif. GOLD CENTER, Av Ayacucho #7232, Cochabamba</li>
          <li className="vertical-text">Sucursal 3: Calle Esteban Arze, Quillacollo y, Cochabamba</li>
        </ul>
        <img src={process.env.PUBLIC_URL + '/mapa.png'} alt="Mapa de Cochabamba"  />
      </div>

      <form className="contacto-form" onSubmit={handleSubmit}>
        <h2>Contacto</h2>
        <label>
          Nombre:
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
        </label>
        <label>
          Correo:
          <input type="email" name="correo" value={form.correo} onChange={handleChange} required />
        </label>
        <label>
          Teléfono:
          <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} required />
        </label>
        <label>
          Detalle:
          <textarea name="detalle" value={form.detalle} onChange={handleChange} required />
        </label>
        <button type="submit">Enviar</button>
      </form>

      {submitted && <p className="success-message">Datos enviados con éxito.</p>}

      <div className="tabla-datos">
        <h2>Datos Enviados</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {contactos.map((contacto) => (
              <tr key={contacto.id}>
                <td>{contacto.nombre}</td>
                <td>{contacto.correo}</td>
                <td>{contacto.telefono}</td>
                <td>{contacto.detalle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacto;
