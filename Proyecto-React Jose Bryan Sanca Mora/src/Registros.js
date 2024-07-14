import React, { useState } from 'react';


const initialData = [
    { id: 1, nombre: 'Alienware m15 R6', marca: 'Alienware', tipo: 'Laptop', estado: 'Nuevo', asignado: true },
    { id: 2, nombre: 'MSI GS66 Stealth', marca: 'MSI', tipo: 'Laptop', estado: 'Nuevo', asignado: false },
    { id: 3, nombre: 'HP Envy 14', marca: 'HP', tipo: 'Laptop', estado: 'Nuevo', asignado: true },
];

const Registros = () => {
    const [registros, setRegistros] = useState(initialData);
    const [busqueda, setBusqueda] = useState('');
    const [nuevoRegistro, setNuevoRegistro] = useState({ id: '', nombre: '', marca: '', estado: '', asignado: false });
    const [registroEditando, setRegistroEditando] = useState(null);

    
    const handleBusquedaChange = (event) => {
        setBusqueda(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'asignado') {
            setNuevoRegistro({ ...nuevoRegistro, [name]: event.target.value === 'true' });
        } else {
            setNuevoRegistro({ ...nuevoRegistro, [name]: value });
        }
    };

    
    const handleRegistrar = (event) => {
        event.preventDefault();
        if (!nuevoRegistro.id || !nuevoRegistro.nombre || !nuevoRegistro.marca || !nuevoRegistro.estado) {
            alert('Por favor complete todos los campos.');
            return;
        }
        setRegistros([...registros, nuevoRegistro]);
        setNuevoRegistro({ id: '', nombre: '', marca: '', estado: '', asignado: false });
    };

    const handleEditar = (id) => {
        const registro = registros.find(registro => registro.id === id);
        setRegistroEditando({ ...registro });
    };


    const handleGuardarEdicion = (event) => {
        event.preventDefault();
        const updatedRegistros = registros.map(registro =>
            registro.id === registroEditando.id ? registroEditando : registro
        );
        setRegistros(updatedRegistros);
        setRegistroEditando(null);
    };

    
    const handleCancelarEdicion = () => {
        setRegistroEditando(null);
    };

    
    const handleEliminar = (id) => {
        const updatedRegistros = registros.filter(registro => registro.id !== id);
        setRegistros(updatedRegistros);
    };

    
    const filteredRegistros = registros.filter(registro =>
        registro.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="registros-container">
            <div className="form-container">
                <h2>Registro de Laptops</h2>
                <form onSubmit={registroEditando ? handleGuardarEdicion : handleRegistrar}>
                    <div className="form-group">
                        <label>ID:</label>
                        <input
                            type="text"
                            name="id"
                            value={registroEditando ? registroEditando.id : nuevoRegistro.id}
                            onChange={handleInputChange}
                            disabled={registroEditando !== null}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            value={registroEditando ? registroEditando.nombre : nuevoRegistro.nombre}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Marca:</label>
                        <input
                            type="text"
                            name="marca"
                            value={registroEditando ? registroEditando.marca : nuevoRegistro.marca}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Estado:</label>
                        <input
                            type="text"
                            name="estado"
                            value={registroEditando ? registroEditando.estado : nuevoRegistro.estado}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Disponible:</label>
                        <select
                            name="asignado"
                            value={registroEditando ? registroEditando.asignado.toString() : nuevoRegistro.asignado.toString()}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="true">Sí</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <button type="submit">{registroEditando ? 'Guardar' : 'Registrar'}</button>
                    {registroEditando && (
                        <button type="button" onClick={handleCancelarEdicion}>Cancelar</button>
                    )}
                </form>
            </div>
            <div className="table-container">
                <h2>Lista de Laptops</h2>
                <div className="search-container">
                    <label>Buscar por nombre:</label>
                    <input
                        type="text"
                        value={busqueda}
                        onChange={handleBusquedaChange}
                        placeholder="Ingrese nombre para buscar"
                    />
                </div>
                <div className="table-scroll">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Estado</th>
                                <th>Disponible</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRegistros.map(registro => (
                                <tr key={registro.id}>
                                    <td>{registro.id}</td>
                                    <td>{registro.nombre}</td>
                                    <td>{registro.marca}</td>
                                    <td>{registro.estado}</td>
                                    <td>{registro.asignado ? 'Sí' : 'No'}</td>
                                    <td>
                                        <button onClick={() => handleEditar(registro.id)}>Editar</button>
                                        <button onClick={() => handleEliminar(registro.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Registros;
