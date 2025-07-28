const express = require('express');
const path = require('path');
const todoModel = require('./models/todo');
const todo = require('./models/todo');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', async(req, res) => {
    const todos = await todoModel.find();
    res.render('index', {todos})
});

app.get('/update/:todoid', async (req, res) => {
    const id = req.params.todoid;
    const todo = await todoModel.findById(id);
    res.render('update', {todo} );
})

app.post('/create', async(req, res, next) => {
    const { todo, due} = req.body;
    console.log(req.body)
    try {
        await todoModel.insertOne({
          todo,
          due,
        });
        res.redirect('/')
        res.status(201).json({ message: 'Todo created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.put('/toggle/:todoid', async(req, res) => { 
    const id = req.params.todoid;
    const {completed} = req.body;
    try {
        await todoModel.findOneAndUpdate({_id: id}, {completed});
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.delete('/delete/:todoid', async (req, res) => {
    const id = req.params.todoid;
    try {
        await todoModel.findOneAndDelete({ _id: id });
        res.redirect("/");
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });    
    }
})

app.post('/update/:todoid', async (req, res) => {
    const id = req.params.todoid;
    const {todo, due} = req.body;
    try {
        await todoModel.findOneAndUpdate({_id: id}, {todo, due});
        res.redirect("/");
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });    
    }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 