llenartabla();

function llenartabla(){
    var tbody = document.querySelector('#tablaregistro tbody');

    tbody.innerHTML = '';

    var aNombre = JSON.parse(localStorage.getItem('nombre_item')),
        aCorreo = JSON.parse(localStorage.getItem('correo_item')),
        aPais = JSON.parse(localStorage.getItem('pais_item')),
        aComentario = JSON.parse(localStorage.getItem('comentario_item'));

    var nCantidadregistro = aNombre.length;

    for(var i = 0; 1 < nCantidadregistro; i++){

        var fila = document.createElement('tr');

    var celdanombre = document.createElement('td'),
        celdacorreo = document.createElement('td'),
        celdapais = document.createElement('td'),
        celdacomentario = document.createElement('td');

    var nodotextoNombre = document.createTextNode(aNombre(i)),
        nodotextoCorreo = document.createTextNode(aCorreo(i)),
        nodotextoPais = document.createTextNode(aPais(i)),
        nodotextoComentario = document.createTextNode(aComentario(i));


        fila.appendChild(celdanombre.appendChild(nodotextoNombre));
        fila.appendChild(celdacorreo.appendChild(nodotextoCorreo));
        fila.appendChild(celdapais.appendChild(nodotextoPais));
        fila.appendChild(celdacomentario.appendChild(nodotextoComentario));

        tbody.appendChild(fila);

    }

}