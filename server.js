import express from 'express';

const app = express();

app.get('/',(req,res)=> {
    res.send('Server is ready')
});

//get a list of 5 jokes
app.get('/jokes',(req,res)=>{
    const jokes = [
       { 
        id:1,
        title:'a joke',
        content:"Why don't scientists trust atoms? Because they make up everything."},

        {
            id:2,
            title:'another joke',

        content:"Why don't eggs tell jokes? They'd crack each other up."},

        {
            id:3,
            title:'third joke',
            content:"Why did the tomato turn red? Because it saw the salad dressing."},
        ];
    res.send(jokes);
})

const port = process.env.PORT||5000;

app.listen(port , ()=>{
    console.log(`Server at http://localhost:${port}`)
})