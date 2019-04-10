module.exports = function(app){
    var autenticar = app.api.autenticar;

    app.route('/autentica')
        .post(autenticar.autentica);

    app.use('/cd/*', autenticar.verificaToken);

    app.route('/cd/deslogar')
        .post(autenticar.desloga);
}