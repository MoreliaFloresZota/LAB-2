function crearUsuario(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
var usuario = crearUsuario('morelia', '123456789', 'more@example.com');
console.log(usuario);
