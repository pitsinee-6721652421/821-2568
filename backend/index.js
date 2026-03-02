const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors'); 

const app = express();
const port = 8000;

app.use(cors()); 
app.use(bodyParser.json());

let users = []
let counter = 1;
let conn = null

const initDBConnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'weddb',
        port: 8821
    });
}

//path = GET /users สำหรับด get ข้อมูล users ทั้งหมด
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0]);
});

//path = POST /users สำหรับเพิ่ม user ใหม่
app.post('/users', async (req, res) => {
    try {     //ประมวลผล
        let user = req.body;
        const results = await conn.query('INSERT INTO users SET ?', user)
        res.json({
            message: 'User created successfully',
            data: results[0]
        })
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        });
    }
});

// Get
app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updataUser = req.body;
        const results = await conn.query(
            'SELECT * FROM users WHERE id = ?', id );

        if (results[0].length === 0) {
            throw { statusCode: 404, message: 'User not found' };
        }

        res.json(results[0][0]);

    } catch (error) {
        console.error('Error fetching user:', error.message);

        let statusCode = error.statusCode || 500;

        res.status(statusCode).json({
            message: 'Error fetching user',
            error: error.message
        });
    }
});
//PUT /users/:id สำหรับแก้ไขข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        let updatedUser = req.body;
        delete updatedUser.id;

        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id])
        if (results[0].affectedRows == 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json({
            message: 'User updated successfully',
            data: updatedUser
        });
    }
    catch (error) {
        console.error('Error updating user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error updating user',
            error: error.message
        });
    }
})
// DELETE

app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('DELETE FROM users WHERE id = ?', [id])
        if (results[0].affectedRows == 0) {
            throw { statusCode: 404, message: 'User not found' };
        }   
        res.json({
            message: 'User deleted successfully'
        });
    }
    catch (error) {
        console.error('Error deleting user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error deleting user',
            error: error.message
        });
    }
})

const startServer = async () => {
    try {
        await initDBConnection();
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

startServer();

//Get ดึงข้อมูลม ,ดู
//Post เพิ่มข้อมูล
//PUT  แก้ข้อมูลเดิม
//DELETE ลบข้อมูล



