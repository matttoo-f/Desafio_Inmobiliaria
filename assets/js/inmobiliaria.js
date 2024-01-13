// Elementos del DOM
const ventaMuestra = document.getElementById("ventaCasas")
const alquilerMuestra = document.getElementById("alquilerCasas")
// Variables
const propiedadesVenta = [
    {
        titulo: 'Apartamento de lujo en zona exclusiva',
        imagen: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane,Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false,

    },
    {
        titulo: 'Apartamento acogedor en la montaña',
        imagen: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en o alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peacks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 0,
        smoke: true,
        pets: true,

    },
    {
        titulo: 'Penthouse de lujo con terraza panorámica',
        imagen: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: ' Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 3,
        smoke: false,
        pets: true,

    },
    {
        titulo: 'Apartamento de lujo en zona exclusiva',
        imagen: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane,Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: true,

    },
    {
        titulo: 'Apartamento acogedor en la montaña',
        imagen: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en o alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peacks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 0,
        smoke: true,
        pets: false,

    },
    {
        titulo: 'Penthouse de lujo con terraza panorámica',
        imagen: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: ' Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 3,
        smoke: true,
        pets: true,

    },
    {
        titulo: 'Apartamento de lujo en zona exclusiva',
        imagen: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane,Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false,

    },
    {
        titulo: 'Apartamento acogedor en la montaña',
        imagen: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en o alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peacks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 0,
        smoke: true,
        pets: true,

    },
    {
        titulo: 'Penthouse de lujo con terraza panorámica',
        imagen: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: ' Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 3,
        smoke: false,
        pets: true,

    },

]

const propiedadesAlquiler = [
    {
        titulo: 'Apartamento en el centro de la ciudad',
        imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true

    },
    {
        titulo: 'Apartamento luminoso con vista al mar',
        imagen: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños:3,
        costo: 2500,
        smoke: true,
        pets: true,

    },
    {
        titulo: 'Condominio moderno en zona residencial',
        imagen: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2500,
        smoke: false,
        pets: false,

    },
    {
        titulo: 'Apartamento en el centro de la ciudad',
        imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: true,
        pets: true,

    },
    {
        titulo: 'Apartamento luminoso con vista al mar',
        imagen: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños:3,
        costo: 2500,
        smoke: false,
        pets: true,

    },
    {
        titulo: 'Condominio moderno en zona residencial',
        imagen: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2500,
        smoke: false,
        pets: true,

    },
]

// Funciones

// funcion identificacion  iconos y clases

const generarMensajeYClases = (valor, icono, mensajeVerdadero, mensajeFalso, claseVerdadero, claseFalso) => {
    const iconoHTML = `<i class="fas ${icono}"></i>`
    const mensaje = valor ? mensajeVerdadero : mensajeFalso
    const clase = valor ? claseVerdadero : claseFalso

    return `<p class="${clase}">${iconoHTML} ${mensaje}</p>`
}

// iterar en primeras 3 cards VENTAS
for (let i = 0; i < 3 && i < propiedadesVenta.length; i++) {
    const datosApartamento = propiedadesVenta[i]

// card HTML
    const tarjetaHTML =
     `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${datosApartamento.imagen}" class="card-img-top" alt="Imagen del departamento">
                <div class="card-body">
                    <h5 class="card-title">${datosApartamento.titulo}</h5>
                    <p class="card-text">${datosApartamento.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${datosApartamento.direccion}</p>
                    <p><i class="fas fa-bed"></i> ${datosApartamento.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${datosApartamento.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${datosApartamento.precio}</p>
                    ${generarMensajeYClases(datosApartamento.smoke, datosApartamento.smoke ? 'fa-smoking' : 'fa-smoking-ban', 'Permitido fumar', 'No se permite fumar', 'text-success', 'text-danger')}
                    ${generarMensajeYClases(datosApartamento.pets, datosApartamento.pets ? 'fa-paw' : 'fa-ban', 'Mascotas permitidas', 'No se permiten mascotas', 'text-success', 'text-danger')}
                </div>
            </div>
        </div>
    `
// Añadir HTML al contenedor
    ventaMuestra.innerHTML += tarjetaHTML        

}


// iTERAR PRIMERAS 3 CARDS ALQUILER
for (let i = 0; i < 3 && i < propiedadesAlquiler.length; i++) {
    const datosApartamento = propiedadesAlquiler[i]

    // card HTML
    const tarjetaHTML =
     `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${datosApartamento.imagen}" class="card-img-top" alt="Imagen del departamento">
                <div class="card-body">
                    <h5 class="card-title">${datosApartamento.titulo}</h5>
                    <p class="card-text">${datosApartamento.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${datosApartamento.direccion}</p>
                    <p><i class="fas fa-bed"></i> ${datosApartamento.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${datosApartamento.banos} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${datosApartamento.precio}</p>
                    ${generarMensajeYClases(datosApartamento.smoke, datosApartamento.smoke ? 'fa-smoking' : 'fa-smoking-ban', 'Permitido fumar', 'No se permite fumar', 'text-success', 'text-danger')}
                    ${generarMensajeYClases(datosApartamento.pets, datosApartamento.pets ? 'fa-paw' : 'fa-ban', 'Mascotas permitidas', 'No se permiten mascotas', 'text-success', 'text-danger')}
                </div>
            </div>
        </div>
    `
    
    // Añadir HTML al contenedor
    alquilerMuestra.innerHTML += tarjetaHTML
}
