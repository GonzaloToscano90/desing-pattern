// Module Pattern : Previo a EMACS6 se usuba este patrón de diseño

const modulo1 = (function() {
    const nombre = 'Gonzalo';

    function hola() {
        console.log('hola')
    }

    return{
        nombre,
        hola
    }
})();

// Hoy en dia se utiliza export default o export const!!