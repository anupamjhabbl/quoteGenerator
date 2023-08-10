const express = require('express');
const app = express();

app.post('/tweet',async (req,res) => { 
    console.log(body);
});

app.listen(3000,'localhost', () => {
    console.log("Server listening on http://localhost:"+3000);
})