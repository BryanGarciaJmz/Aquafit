export const products = [
  {
    id: 1,
    nombre: 'Gafas de Natación',
    descripcion: 'Protección UV y anti-empañamiento',
    tallas: ['Única'],
    precio: 25.0,
    imagen: '/images/gafas.jpg',
  },
  {
    id: 2,
    nombre: 'Tabla de Surf',
    descripcion: 'Para principiantes y expertos',
    tallas: ['6’0', '6’6', '7’0'],
    precio: 350.0,
    imagen: '/images/tabla-surf.jpg',
  },
  {
    id: 3,
    nombre: 'Aletas de Buceo',
    descripcion: 'Cómodas y resistentes',
    tallas: ['S', 'M', 'L'],
    precio: 45.0,
    imagen: '/images/aletas.jpg',
  },
  {
    id: 4,
    nombre: 'Traje de Neopreno',
    descripcion: 'Máxima comodidad térmica',
    tallas: ['S', 'M', 'L', 'XL'],
    precio: 120.0,
    imagen: '/images/traje-neopreno.jpg',
  },
  {
    id: 5,
    nombre: 'Kit de Snorkel',
    descripcion: 'Máscara y tubo incluidos',
    tallas: ['Única'],
    precio: 55.0,
    imagen: '/images/snorkel.jpg',
  },
  {
    id: 6,
    nombre: 'Chaleco Salvavidas',
    descripcion: 'Seguridad certificada',
    tallas: ['S', 'M', 'L', 'XL'],
    precio: 40.0,
    imagen: '/images/chaleco.jpg',
  },
];

export function getProductById(id) {
  return products.find((p) => String(p.id) === String(id));
}