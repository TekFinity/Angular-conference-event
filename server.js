const express = require('express');
const app = express();
app.use(express.static('./dist/pluralsightAngularCourse'));
app.get('/*', (req,res)=>{
    res.sendFile('index.html', {root: 'dist/angularappa'});
});
app.listen(process.env.PORT || 8080);
