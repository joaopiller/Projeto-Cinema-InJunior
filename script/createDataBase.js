import sequelize from '../config/database.js';

async function createDataBase() {
    try {
        await sequelize.sync({ force: true });
        console.log("BD criado com sucesso");
    } catch (error) {
        console.log("Não foi possível criar o BD", error);
    }
}

export default createDataBase;
