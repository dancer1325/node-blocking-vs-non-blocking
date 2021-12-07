// Sync because it's blocking
const getUsuarioSync = (id) => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000) {
        // Esperando...
        // Haciendo fetch de base de datos...
        // Robando datos de facebook...
    }

    return {
        id,
        nombre: `Usuario ${ id }`
    };
}

// Async because it's non blocking
const getUsuario = (id, callback) => {
    const usuario = {
        id,
        nombre: `Usuario ${ id }`
    };
    // Wait for 3000 ms = 3s, and afterwards launching callback function
    setTimeout(() => {
        callback(usuario);
    }, 3000);
}

// Required to import it afterwards
module.exports = {
    getUsuario,
    getUsuarioSync
}