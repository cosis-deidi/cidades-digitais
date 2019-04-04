//Carrega o modulo do mysql.
const mysql = require('mysql');

//Cria a conexão com o Banco de Dados.
const connectMYSQL = () => {
	return mysql.createConnection({
			host: '172.25.116.18',
			user: 'eduardo',
			password: 'eduardo',
			database: 'cidades_digitais_v10' 
	});
};

//Retorna a conexão.
module.exports = () => {
	return connectMYSQL;
};