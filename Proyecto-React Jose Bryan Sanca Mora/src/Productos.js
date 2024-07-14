// Productos.js
import React from 'react';


const Productos = () => {
  // Lista de productos con nombres, imágenes, descripciones y precios únicos
  const productos = [
    {
      id: 1,
      nombre: 'Apple MacBook Pro',
      imagen: '/laptop1.jpeg',
      descripcion: 'MacBook Pro con procesador M1, pantalla Retina y hasta 16 GB de RAM.',
      precio: '$1299',
    },
    {
      id: 2,
      nombre: 'Dell XPS 13',
      imagen: '/laptop2.jpg',
      descripcion: 'Dell XPS 13 con procesador Intel Core i7, pantalla InfinityEdge y 16 GB de RAM.',
      precio: '$1399',
    },
    {
      id: 3,
      nombre: 'HP Spectre x360',
      imagen: '/Laptop3.png',
      descripcion: 'HP Spectre x360 convertible con procesador Intel Core i7, pantalla táctil y 512 GB SSD.',
      precio: '$1499',
    },
    {
      id: 4,
      nombre: 'Lenovo ThinkPad X1 Carbon',
      imagen: '/laptop4.jpg',
      descripcion: 'Lenovo ThinkPad X1 Carbon con procesador Intel Core i7, pantalla 4K y 16 GB de RAM.',
      precio: '$1599',
    },
    {
      id: 5,
      nombre: 'Asus ROG Zephyrus G14',
      imagen: '/laptop5.jpeg',
      descripcion: 'Asus ROG Zephyrus G14 con procesador AMD Ryzen 9, NVIDIA GeForce RTX 3060 y pantalla WQHD.',
      precio: '$1699',
    },
    {
      id: 6,
      nombre: 'Acer Swift 5',
      imagen: '/laptop6.jpeg',
      descripcion: 'Acer Swift 5 ultraligero con procesador Intel Core i5, pantalla táctil y 1 TB SSD.',
      precio: '$1199',
    },
    {
      id: 7,
      nombre: 'Microsoft Surface Laptop 4',
      imagen: '/laptop7.jpeg',
      descripcion: 'Microsoft Surface Laptop 4 con procesador Intel Core i5, pantalla táctil PixelSense y hasta 32 GB de RAM.',
      precio: '$1299',
    },
    {
      id: 8,
      nombre: 'Razer Blade 15',
      imagen: '/laptop8.jpeg',
      descripcion: 'Razer Blade 15 con procesador Intel Core i7, NVIDIA GeForce RTX 3070 y pantalla Full HD de 144 Hz.',
      precio: '$1799',
    },
    {
      id: 9,
      nombre: 'Alienware m15 R6',
      imagen: '/laptop9.jpeg',
      descripcion: 'Alienware m15 R6 con procesador Intel Core i9, NVIDIA GeForce RTX 3080 y pantalla QHD de 240 Hz.',
      precio: '$2499',
    },
    {
      id: 10,
      nombre: 'MSI GS66 Stealth',
      imagen: '/laptop10.jpeg',
      descripcion: 'MSI GS66 Stealth con procesador Intel Core i7, NVIDIA GeForce RTX 3060 y pantalla Full HD de 144 Hz.',
      precio: '$1699',
    },
    {
      id: 11,
      nombre: 'Samsung Galaxy Book Pro 360',
      imagen: '/laptop11.jpeg',
      descripcion: 'Samsung Galaxy Book Pro 360 con procesador Intel Core i7, pantalla AMOLED táctil y 16 GB de RAM.',
      precio: '$1499',
    },
    {
      id: 12,
      nombre: 'HP Envy 14',
      imagen: '/laptop12.jpeg',
      descripcion: 'HP Envy 14 con procesador Intel Core i7, pantalla OLED y 16 GB de RAM.',
      precio: '$1399',
    },
  ];

  return (
    <div className="productos-container">
      <h2 className="titulo-productos">Laptops</h2>
      <div className="cuadros-productos">
        {productos.map((producto) => (
          <div key={producto.id} className="cuadro-producto">
            <img src={process.env.PUBLIC_URL + producto.imagen} alt={producto.nombre} />
            <div className="info-producto">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p className="precio">{producto.precio}</p>
              <button className="btn-ordenar">Ordenar Producto</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
