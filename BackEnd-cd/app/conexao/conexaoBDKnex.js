//Carrega o modulo do knex.
var knex = require('knex');

//Cria conexão com o Banco de Dados MySql.
var connectKnex = function(){
    return knex({
        client: 'mysql',
        connection: {
            host : '172.25.116.18',
            user : 'eduardo',
            password : 'eduardo',
            database : 'cidades_digitais_db'
        }
    });
}

//Retorna a conexão.
module.exports = function(){
	return connectKnex;
};