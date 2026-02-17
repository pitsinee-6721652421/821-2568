//17/02/69
c/nst express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
app.use(bodyParser.json());
let users = []
let counter = 1;

// path = GET /users
app.get('/users', (req, res) => {
    res.json(users);
});

// path = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter;
    counter += 1;
    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user
    });
});
// path = PUT /user/:id  //แก้
app.put('/user/:id', (req, res) => {
    
    let updatedUser = req.body;
    let id = req.params.id;
    //user จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);
     if (updatedUser.name) {
        users[selectedIndex].name = updatedUser.name    
    }
    if (updatedUser.age) {
        users[selectedIndex].age = updatedUser.age
    }

    //อัพเดทข้อมูล user
    users[selectedIndex] = updatedUser

    //เอาข้อมูลที่ update ส่ง response กลับไป
    res.json({
        message: 'User updated successfully',
        data: {
            user: updatedUser,
            indexUpdated: selectedIndex
        }
    })
});

app.delete("/user/:id", (req, res) => {
    let selectedIndex = users.findIndex(users => users .id ==id);
    delete users[selectedIndex];
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
