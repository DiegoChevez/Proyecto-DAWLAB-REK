    var aNombre = [],
    aCorreo = [],
    aPais = [],
    aComentario = [];

    var elementobotonregistro = document.querySelector('#boton');

    elementobotonregistro.addEventListener('click', Contactos);

    function Contactos(){
        var Nombre = document.querySelector('#txtNombre').value,
            sCorreo = document.querySelector('#txtCorreo').value,
            sPais = document.querySelector('#txtPais').value,
            sComentario = document.querySelector('#txtComentario').value;

            aNombre.push(Nombre);
            aCorreo.push(sCorreo);
            aPais.push(sPais);
            aComentario.push(sComentario);

            localStorage.setItem('nombre_item', JSON.stringify(aNombre));
            localStorage.setItem('correo_item', JSON.stringify(aCorreo));
            localStorage.setItem('pais_item', JSON.stringify(aPais));
            localStorage.setItem('Comentario_item', JSON.stringify(aComentario));

        }