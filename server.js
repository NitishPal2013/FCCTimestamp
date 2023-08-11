const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html')
})

app.get('/api/:data?',(req,res)=>{
    let data = req.params.data;
    let date;
    if(data){
        if(data.includes('-')){
            date = new Date(data);
            data = Date.parse(date);
        }
        else{
            data = +data;
            date = new Date(data);
        }
    }
    else{
        date = new Date();
        data = Date.parse(date);
    }
    if(date == "Invalid Date"){
        res.json({error : "Invalid Date"});
    }
    else{
        res.json({unix: data, utc: date.toUTCString()});
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})