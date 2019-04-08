module.exports = function(app){
    let usuario = app.api.usuario;

    //*************** Rotas em usuario ***************//
    app.route('/cd/usuario')
        .get(usuario.listaUsuario)
        .post(usuario.salvaUsuario);

    app.route('/cd/usuario/:cod_usuario')
        .get(usuario.listaUsuarioId)
        .put(usuario.editaUsuario)

    app.route('/cd/alteraSenha/:cod_usuario')
        .put(usuario.alteraSenha);
}