import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/database.sqlite',
});

async function test() {
    try {
        await sequelize.authenticate();
        console.log("O servidor está rodando");
    } catch (error) {
        console.log("Não foi possível conectar ao banco", error);
    }
}
test();

export default sequelize;
