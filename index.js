const express = require('express');
const app = express()


app.get('/api/genres', (req, res) => {
     res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
     res.send(req.params.id);
});

/* app.post()
app.put()
app.delete() */



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));