const  {app} = require('./config/express');   //el require nos regresa el mismo objeto , y lo que hace con app esta sacando ese objeto

const main =()=>{
    app.listen(app.get("port"));
    console.log(`Server running in http://localhost:${app.get("port")}/`);
};

main();

