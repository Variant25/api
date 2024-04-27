// require(`dotenv`).config();
const express = require("express");
const cors = require("cors");

require("./DB/config");
const Form = require("./DB/form");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/form",async (req, res)=>{
    let form = new Form(req.body);
    let result = await form.save();
    res.send(result);
})

app.listen(5000);

// connect to the mongodb
// mongoose.connect(process.env.MONG_URL)
// .then(() => {
//     app.listen(process.env.PORT, () => {
//         console.log(`coonected to db and server is running`, process.env.PORT);
//     })
    
// })
// .catch((error) => {
//     console.log(error);
// })
