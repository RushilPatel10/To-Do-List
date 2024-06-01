const express = require('express');
const app = express();
const PORT = 8088;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/add', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.redirect('/');
});

app.post('/delete/:index', (req, res) => {
    const index = req.params.index;
    tasks.splice(index, 1);
    res.redirect('/');
});

app.post('/edit/:index', (req, res) => {
    const index = req.params.index;
    const newTask = req.body.newTask;
    tasks[index] = newTask;
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});