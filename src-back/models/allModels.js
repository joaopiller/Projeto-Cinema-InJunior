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
    filmeId:{
        type: DataTypes.UUID,
        allowNull:false,
    }
});


const Assentos = sequelize.define("Assentos", {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    numero: {
        type: DataTypes.STRING,
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
    isOcuped:{
        type:DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    secaoId:{
        type: DataTypes.UUID,
        allowNull: false,
    }
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

Filmes.hasMany(Secoes, { foreignKey: "filmeId" });
Secoes.belongsTo(Filmes, { foreignKey: "filmeId" });
Secoes.hasMany(Assentos, { foreignKey: "secaoId" });
Assentos.belongsTo(Secoes, { foreignKey: "secaoId" });

Filmes.addHook('afterCreate', async (filme, options) => {
    const horarios = ['15:30', '17:30', '16:00', '14:30', '20:00', '21:30', '18:00', '19:30', '10:00', '11:30']
    const bairrosRj = ['Tijuca', 'Copacabana']
    const bairrosNt = ['Icarai', 'Centro']
    const cidades = ['Rio de Janeiro', 'Niteroi']
    const min = 0;
    const max = 9;
    const maxBairro = 1; // Índice máximo válido para os arrays de bairros

    for (let i = 1; i <= 9; i++) {
        const randomNumberHorarios = Math.floor(Math.random() * (max - min + 1)) + min;
        const randomNumberBairro = Math.floor(Math.random() * (maxBairro + 1)); // Agora gera 0 ou 1
        var secao = 0

        if (i % 2 == 0) {
            var secao = {
                id: uuidv4(),
                horario: horarios[randomNumberHorarios],
                cidade: cidades[0],
                bairro: bairrosRj[randomNumberBairro], // Sempre válido
                tipo: i % 3,
                filmeId:filme.id
            }
        } else {
            var secao = {
                id: uuidv4(),
                horario: horarios[randomNumberHorarios],
                cidade: cidades[1],
                bairro: bairrosNt[randomNumberBairro], // Sempre válido
                tipo: i % 3,
                filmeId:filme.id
            }
        }

        await Secoes.create(secao)
        
    }

    // await Secoes.bulkCreate(secoes);
})

Secoes.addHook('afterCreate', async (secao, options) => {
    console.log('Criando assentos para a seção:', secao.id); // Verifique se este log aparece

    try {
        const assentos = [];
        const fileiras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        const numeroAssentosPorFileira = 18; 
        const preco = 20.00;

        fileiras.forEach((fileira) => {
            for (let numero = 1; numero <= numeroAssentosPorFileira; numero++) {
                assentos.push({
                    id: uuidv4(),
                    numero: `${fileira}${numero}`,
                    preco: preco,
                    secaoId: secao.id,
                    Cpf: null,
                    Nome: null,
                    isOcuped: false
                });
            }
        });

        await Assentos.bulkCreate(assentos);
        console.log('Assentos criados com sucesso para a seção:', secao.id);
    } catch (error) {
        console.error('Erro ao criar assentos:', error);
    }
})

export {
    Filmes,
    Secoes,
    Assentos,
    Users
};