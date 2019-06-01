const AppDAO = require('../../common/AppDao')
class ProductDao {
    constructor(dao = new AppDAO()) {
        this.tableName = 'product';
        this.dao = dao
        this.createTable();
    }

    createTable() {
        const sql = `
        CREATE TABLE IF NOT EXISTS ${this.tableName} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name STRING)`;

        return this.dao.run(sql).then(
            response => {
                console.log('Product table is created successfully');
            },
            error => {
                console.log(' ---- Product table is not created successfully');

            }
        );
    }

    create(data) {
        const {name} = data;
        return this.dao.run(
          `INSERT INTO ${this.tableName} (name) VALUES (?)`,
          [name])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM ${this.tableName}`)
    }
}

module.exports = ProductDao;