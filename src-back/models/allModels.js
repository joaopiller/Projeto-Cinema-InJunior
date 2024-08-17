import {  DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';  // Correção para usar a função de geração de UUID corretamente
import sequelize from '../../config/database.js';

const Filmes = sequelize.define("Filmes", {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sinopse: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    classificacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    diretor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const Secoes = sequelize.define("Secoes", {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    horario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

const Assentos = sequelize.define("Assentos", {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    Cpf: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

const Users = sequelize.define("Users", {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    aniversario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Filmes.hasMany(Secoes, { foreignKey: "filmesId" });
Secoes.belongsTo(Filmes, { foreignKey: "filmesId" });
Secoes.hasMany(Assentos, { foreignKey: "secoesId" });
Assentos.belongsTo(Secoes, { foreignKey: "secoesId" });

export {
    Filmes,
    Secoes,
    Assentos,
    Users
};