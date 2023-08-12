const express = require('express')
const app = express()
const port = 80

function dateConverter(data){
    let date;
    if(data){
        if(+data > 0) date = new Date(+data);
        else date = new Date(data);
    }
    else{
        date = new Date();
    }

    return date != "Invalid Date" ? {unix: Date.parse(date), utc: date.toUTCString()}:{error: "Invalid date"};
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/index.html')
})

app.get('/api/:data?',(req,res)=>{
    let data = req.params.data;
    const response = dateConverter(data);
    res.json(response);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})