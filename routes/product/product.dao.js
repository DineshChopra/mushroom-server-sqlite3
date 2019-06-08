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
        name STRING,
        desc STRING,
        registerDate TEXT)`;

        return this.dao.run(sql).then(
            response => {
                console.log('Product table is created successfully');
                // this.create({name: 'Bag'});
            },
            error => {
                console.log(' ---- Product table is not created successfully');

            }
        );
    }

    create(data) {
        const {name, desc} = data;
        const query = `INSERT INTO ${this.tableName} (name, desc, registerDate) VALUES (?, ?, datetime())`;
        return this.dao.run(query, [name, desc]);
    }

    getAll() {
        return this.dao.all(`SELECT * FROM ${this.tableName}`)
    }
}

module.exports = ProductDao;