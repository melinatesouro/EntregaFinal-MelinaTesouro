
const botonCargar = document.getElementById("botonCargar");
const contenedor = document.getElementById("contenedorTarjetas");

function cargarExperiencias() {

    fetch("datos.json")
        .then(respuesta => respuesta.json())
        .then(datos => {

            let tarjetas = "";

            datos.forEach(item => {

                tarjetas += `
                    <div class="col-md-4 mb-4">
                        <div class="card border">
                            <h3>${item.titulo}</h3>
                            <p>${item.descripcion}</p>
                            <p>${item.detalles}</p>
                        </div>
                    </div>
                `;

            });

            contenedor.innerHTML = tarjetas;

        });
}

botonCargar.addEventListener("click", cargarExperiencias);
