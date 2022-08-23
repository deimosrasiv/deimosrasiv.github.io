window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


function enviar() {
    var modal = "modalmensajes";
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var textMessage = document.getElementById("textMessage").value;
    var contador = 0;

    if (nombre != "") {
        var contador = contador + 1;
    }

    if (email != "") {
        var contador = contador + 1;
    }

    if (contador > 1) {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hora = date.getHours();
        let minutos = date.getMinutes();
        let segundos = date.getSeconds();

        if (hora < 10) {
            hora1 = `0${hora}`;
        } else {
            hora1 = `${hora}`;
        }

        if (minutos < 10) {
            minutos1 = `0${minutos}`;
        } else {
            minutos1 = `${minutos}`;
        }

        if (segundos < 10) {
            segundos1 = `0${segundos}`;
        } else {
            segundos1 = `${segundos}`;
        }

        if (month < 10) {
            var month1 = `0${month}`;
        } else {
            var month1 = `${month}`;
        }

        if (day < 10) {
            var day1 = `0${day}`;
        } else {
            var day1 = `${day}`;
        }

        var hora_solicitud = hora1 + ":" + minutos1 + ":" + segundos1;
        var fecha_solicitud = day1 + "-" + month1 + `-${year}`;

        var my_mensaje = `Se esta solicitando contactarse con usted : %0A %0A <b>Usuario:</b> <i>${nombre}</i>  %0A <b>Email:</b> <i>${email}</i> %0A <b>Mensaje:</b> <i>${textMessage}</i> %0A <b>Hora de envio:</b> <i>${hora_solicitud}</i>  %0A <b>Fecha de envio:</b> <i>${fecha_solicitud}</i>`;
        var my_mensaje2 = `Esto es solo una Prueba, no es real!!. Alerta de temperatura alta:`;

        var token = "1995224836:AAFTI0sdAnVAs5fOjEKjPYu6aU3fe7iMsp0";
        var chat_id_canal = -1001530134776; /* envia al canal */
        var chat_id_master = 1942133499; /* envia solo al master */

        var url_solicita_black938 = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id_master}&text=${my_mensaje}&parse_mode=html`;
        //console.log(url_solicita_black938);

        let api_black938 = new XMLHttpRequest();
        api_black938.open("GET", url_solicita_black938, true);
        api_black938.send();

        console.log("Mensaje enviado a Telegram");

        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var textMessage = document.getElementById("textMessage").value;
        var cuerpo = "Se han enviado con exito el mensaje";
        var cuerpo2 =
            "<stron>Eduardo Rivas </stron> Se contactara con usted.";

        $("#" + modal).modal("show");

        modalcontenido.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title">Mensaje enviado con Exito a Telegram!!.</h5>
                <!--<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
              </div>
              <div class="modal-body">
                    <p>Muchas gracias, por su mensaje. Dentro de las 24hrs. me contactare con usted!</p>
                <small></small>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                
              </div>
            `;
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("textMessage").value = "";
    } else {
        modalcontenido.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title">Falta Información</h5>
                <!--<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
              </div>
              <div class="modal-body">
                <p>Para poder enviar su mensaje, debe ingresar los datos solicitados.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            `;
        $("#" + modal).modal("show");
    }
}

function countChars(obj) {
    var strLength = obj.value.length;
    var maxLength = obj.dataset.max;
    var charRemain = maxLength - strLength;

    if (charRemain < 0) {
        document.getElementById("txaCount").innerHTML =
            "Has excedido el límite de " + maxLength + " caracteres";
    } else {
        document.getElementById("txaCount").innerHTML =
            "Caracteres Restantes: " + charRemain;
    }
}