export const fetchUnitsByBrickId = id => {
  console.log(id)
  return new Promise(resolve => {
    resolve({
      all: [
        {
          id: '432432',
          baths: 1,
          field: 120,
          image: 'https://picsum.photos/75/75',
          name: 'Modelo A',
          parking: 1,
          price: '3,000,00',
          rooms: 2,
          surface: 98,
          type: 'Departamento',
          status: 'available'
        },
        {
          id: '5432534',
          baths: 2,
          field: 0,
          image: 'https://picsum.photos/75/75',
          name: 'Modelo B',
          parking: 1,
          price: '2,200,00',
          rooms: 1,
          surface: 76,
          type: 'Departamento',
          status: 'deleted'
        }
      ],
      available: [
        {
          id: '5432534',
          baths: 2,
          field: 0,
          image: 'https://picsum.photos/75/75',
          name: 'Modelo B',
          parking: 1,
          price: '2,200,00',
          rooms: 1,
          surface: 76,
          type: 'Departamento',
          status: 'available'
        }
      ],
      sold: [],
      deleted: [
        {
          id: '432432',
          baths: 1,
          field: 120,
          image: 'https://picsum.photos/75/75',
          name: 'Modelo A',
          parking: 1,
          price: '3,000,00',
          rooms: 2,
          surface: 98,
          type: 'Departamento',
          status: 'deleted'
        }
      ]
    })
  })
}

export const fetchUnitDataById = id => {
  console.log(id)
  return new Promise(resolve => {
    resolve({
      title: 'Titulo Bonito',
      model: 'Modelo A',
      price: '432',
      build_surface: 34,
      field_surface: 43,
      description: 'Mi Descripción',
      id
    })
  })
}
