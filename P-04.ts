
function crearUsuario(name: string, ci: string, email: string) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}

const usuario = crearUsuario('morelia', '123456789', 'more@example.com');
console.log(usuario);
