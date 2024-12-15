var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,

});

typewriter.typeString('Ingeniera en Sistemas')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Cuando la conexión inalámbrica sea perfeccionada, toda la Tierra se convertirá en un cerebro enorme que de hecho es ... Podremos comunicarnos entre nosotros instantáneamente, independientemente de la distancia')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong> Sistemas!</strong>')
    .pauseFor(2500)
    .start();
