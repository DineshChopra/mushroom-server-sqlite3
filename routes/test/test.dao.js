const AppDAO = require('../../common/AppDao')
class TestDao {
    constructor(dao = new AppDAO()) {
        this.tableName = 'test';
        this.dao = dao
        this.createTable();
    }

    createTable() {
        const sql = `
        CREATE TABLE IF NOT EXISTS ${this.tableName} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name STRING,
        createDate TEXT
        )`;

        return this.dao.run(sql).then(
            response => {
                console.log('Test table is created successfully');
                this.create({name: 'Bag'}).then(
                    createResponse => console.log('create test response -- ', createResponse),
                    createErrorResponse => console.log('create error response -- ', createErrorResponse)
                );
            },
            error => {
                console.log(' ---- Test table is not created successfully');

            }
        );
    }

    create(data) {
        const {name} = data;
        const createDate = new Date();
        console.log('-- createDate -- ', createDate);
        const query = `INSERT INTO ${this.tableName} (name, createDate) VALUES (?, datetime())`;
        return this.dao.run(query, [name]);
    }

    getAll() {
        return this.dao.all(`SELECT * FROM ${this.tableName}`)
    }
}

module.exports = TestDao;