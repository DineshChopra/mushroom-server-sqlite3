const AppDAO = require('../../common/AppDao')
class CustomerDao {
    constructor(dao = new AppDAO()) {
        this.tableName = 'customer';
        this.dao = dao
        this.createTable();
    }

    createTable() {
        const sql = `
        CREATE TABLE IF NOT EXISTS ${this.tableName} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name STRING,
        mobileNo STRING,
        address STRING,
        registerDate TEXT)`;

        return this.dao.run(sql).then(
            response => {
                console.log('Customer table is created successfully');
                // this.create({"name" : "Nivender", "mobileNo": "9916418885"});
            },
            error => {
                console.log(' ---- Customer table is not created successfully');

            }
        );
    }

    create(data) {
        const {name, mobileNo, address} = data;
        const query = `INSERT INTO ${this.tableName} (name, mobileNo, address, registerDate) 
                        VALUES (?, ?, ?, datetime())`;
        const values = [name, mobileNo, address];
        return this.dao.run(query, values);
    }

    getAll() {
        return this.dao.all(`SELECT * FROM ${this.tableName}`)
    }
}

module.exports = CustomerDao;