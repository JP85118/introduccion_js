let list = [
  {
    nombre: 'Javier',
    apellido: 'Peñaranda',
    edad: 24,
    question: true,
    data: new Date('1998, 06, 09'),
  },
  {
    titulo: 'Apocalipsis',
    autor: 'Mario Mendoza',
    fecha: 2011,
    url:'https://www.planetadelibros.com.co/libro-apocalipsis/329960'
  },
  ['Jugar en el PC', 'MTB', 'Leer', 'Escuchar música'],
  {
    miActividadFavorita: function () {
      return list[2];
    }
  }
]

console.log(list[3].miActividadFavorita());
