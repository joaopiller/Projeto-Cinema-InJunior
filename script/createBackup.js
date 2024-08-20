// script/createBackup.js
import sequelize from '../config/database.js';

async function createBackup() {
  try {
    // Cria a tabela de backup se não existir
    await sequelize.query(`
      CREATE TABLE IF NOT EXISTS Filmes_backup (
        id UUID UNIQUE PRIMARY KEY,
        title TEXT NOT NULL,
        Url TEXT NOT NULL,
        sinopse TEXT NOT NULL,
        genero TEXT NOT NULL,
        classificacao INTEGER NOT NULL,
        diretor TEXT NOT NULL,
        createdAt DATETIME NOT NULL,
        updatedAt DATETIME NOT NULL
      );
    `);

    // Limpa a tabela de backup antes de inserir novos dados
    await sequelize.query('DELETE FROM Filmes_backup;');

    // Copia os dados da tabela Filmes para Filmes_backup
    await sequelize.query(`
      INSERT INTO Filmes_backup (id, title, Url, sinopse, genero, classificacao, diretor, createdAt, updatedAt)
      SELECT id, title, Url, sinopse, genero, classificacao, diretor, createdAt, updatedAt
      FROM Filmes
      WHERE id NOT IN (SELECT id FROM Filmes_backup);
    `);

    console.log('Backup criado com sucesso.');
  } catch (error) {
    console.error('Erro ao criar o backup do banco de dados:', error);
  }
}

export default createBackup;
