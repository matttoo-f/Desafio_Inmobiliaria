// Elementos del DOM
const ventaMuestra = document.getElementById("ventaCasas")
const alquilerMuestra = document.getElementById("alquilerCasas")
const totalVenta = document.getElementById("totalVenta")
const totalAlquiler = document.getElementById("totalAlquiler")
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
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi61hNb1SnLay8mKpSR1Dy6zV9H-TDUxwCG_5bQwpkaQ_aIWY-SSU3twtub5YaPLy7QGg&usqp=CAU',
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
        imagen: 'https://media.yaencontre.com/img/photo/w380/46373/46373-49640610-1238895648.jpg',
        descripcion: ' Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 3,
        smoke: true,
        pets: true,

    },
    {
        titulo: 'Apartamento de lujo en zona exclusiva',
        imagen: 'https://images2-mega.cdn.mdstrm.com/meganoticias/2023/04/05/_410666_1_642d8a0e30bdb.jpg',
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
        imagen: 'https://gpvivienda.com/blog/wp-content/uploads/2023/03/ralph-ravi-kayden-mR1CIDduGLc-unsplash-1-1-1024x680.jpg',
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
        imagen: 'https://www.colliers.com/-/media/images/colliers/latam/chile/imagenes_noticias/imagenes-noticias-1024x972/1024x972vivienda_lujo_ventadecasas_departamentos.ashx?bid=1bf0e7eb68004c1588974deb98a0644a',
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
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgd3PGpQtIB8ZUJ50P6_egI8GwMDuBwD4xSp6YLpwThF5yqaj4FBaPJ8fXqTkj38JegDk&usqp=CAU',
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
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJ8UdB3fiy2e3SlS3chPvW-jKI1XAbzjC17Z_o9CHb1wpdZD5utPseMCkzFhWeIzhztI&usqp=CAU',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2500,
        smoke: false,
        pets: true,

    },
    {
        titulo: 'Apartamento en el centro de la ciudad',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfa2enj0iDxgOfbKmUBiCfNuXDNC0E6ciI3EndHz6Z6a3604iZP6I6nSNABSNzTB5ou0&usqp=CAU',
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
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYMo3omCh0809O6tN9PzNvrhtsLUs0m1CIFeOK4sA99MudytQn8wuBzHvpJtn2t0jzzI&usqp=CAU',
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
        imagen: 'https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/45/20/73/1081204976.jpg',
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
//agregar 3 tarjetas Ventas
function agregarTarjetasVenContenedor(datos, contenedor) {
    for (let i = 0; i < 3 && i < datos.length; i++) {
        const datosApartamento = datos[i];

        // card HTML
        const tarjetaHTML =
            `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${datosApartamento.imagen}" class="card-img-top" alt="Imagen del departamento">
                <div class="card-body">
                    <h5 class="card-title">${datosApartamento.titulo}</h5>
                    <p class="card-text">${datosApartamento.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${datosApartamento.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${datosApartamento.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${datosApartamento.baños} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${datosApartamento.costo}</p>
                    ${generarMensajeYClases(datosApartamento.smoke, datosApartamento.smoke ? 'fa-smoking' : 'fa-smoking-ban', 'Permitido fumar', 'No se permite fumar', 'text-success', 'text-danger')}
                    ${generarMensajeYClases(datosApartamento.pets, datosApartamento.pets ? 'fa-paw' : 'fa-ban', 'Mascotas permitidas', 'No se permiten mascotas', 'text-success', 'text-danger')}
                </div>
            </div>
        </div>
    `;

        // Añadir HTML al contenedor
        contenedor.innerHTML += tarjetaHTML;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    agregarTarjetasVenContenedor(propiedadesVenta, ventaMuestra);
});

//agregar 3 tarjetas Alquiler
function agregarTarjetasAlContenedor(datos, contenedor) {
    for (let i = 0; i < 3 && i < datos.length; i++) {
        const datosApartamento = datos[i];

        // card HTML
        const tarjetaHTML =
            `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${datosApartamento.imagen}" class="card-img-top" alt="Imagen del departamento">
                <div class="card-body">
                    <h5 class="card-title">${datosApartamento.titulo}</h5>
                    <p class="card-text">${datosApartamento.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${datosApartamento.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${datosApartamento.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${datosApartamento.baños} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${datosApartamento.costo}</p>
                    ${generarMensajeYClases(datosApartamento.smoke, datosApartamento.smoke ? 'fa-smoking' : 'fa-smoking-ban', 'Permitido fumar', 'No se permite fumar', 'text-success', 'text-danger')}
                    ${generarMensajeYClases(datosApartamento.pets, datosApartamento.pets ? 'fa-paw' : 'fa-ban', 'Mascotas permitidas', 'No se permiten mascotas', 'text-success', 'text-danger')}
                </div>
            </div>
        </div>
    `;

        // Añadir HTML al contenedor
        contenedor.innerHTML += tarjetaHTML;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    agregarTarjetasAlContenedor(propiedadesAlquiler, alquilerMuestra);
});

//agregar todas las cards en pagina venta

function agregarTarjetasVentaTotal(datos, contenedor) {
    for (let i = 0; i < datos.length; i++) {
        const datosApartamento = datos[i];

        // card HTML
        const tarjetaHTML =
            `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${datosApartamento.imagen}" class="card-img-top" alt="Imagen del departamento">
                <div class="card-body">
                    <h5 class="card-title">${datosApartamento.titulo}</h5>
                    <p class="card-text">${datosApartamento.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${datosApartamento.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${datosApartamento.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${datosApartamento.baños} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${datosApartamento.costo}</p>
                    ${generarMensajeYClases(datosApartamento.smoke, datosApartamento.smoke ? 'fa-smoking' : 'fa-smoking-ban', 'Permitido fumar', 'No se permite fumar', 'text-success', 'text-danger')}
                    ${generarMensajeYClases(datosApartamento.pets, datosApartamento.pets ? 'fa-paw' : 'fa-ban', 'Mascotas permitidas', 'No se permiten mascotas', 'text-success', 'text-danger')}
                </div>
            </div>
        </div>
    `;

        // Añadir HTML al contenedor
        contenedor.innerHTML += tarjetaHTML;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    agregarTarjetasVentaTotal(propiedadesVenta, totalVenta);
});

//agregar todas las cards en pagina alquiler

function agregarTarjetasAlquilerTotal(datos, contenedor) {
    for (let i = 0; i < datos.length; i++) {
        const datosApartamento = datos[i];

        // card HTML
        const tarjetaHTML =
            `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${datosApartamento.imagen}" class="card-img-top" alt="Imagen del departamento">
                <div class="card-body">
                    <h5 class="card-title">${datosApartamento.titulo}</h5>
                    <p class="card-text">${datosApartamento.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${datosApartamento.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${datosApartamento.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${datosApartamento.baños} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${datosApartamento.costo}</p>
                    ${generarMensajeYClases(datosApartamento.smoke, datosApartamento.smoke ? 'fa-smoking' : 'fa-smoking-ban', 'Permitido fumar', 'No se permite fumar', 'text-success', 'text-danger')}
                    ${generarMensajeYClases(datosApartamento.pets, datosApartamento.pets ? 'fa-paw' : 'fa-ban', 'Mascotas permitidas', 'No se permiten mascotas', 'text-success', 'text-danger')}
                </div>
            </div>
        </div>
    `;

        // Añadir HTML al contenedor
        contenedor.innerHTML += tarjetaHTML;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    agregarTarjetasAlquilerTotal(propiedadesAlquiler, totalAlquiler);
});

