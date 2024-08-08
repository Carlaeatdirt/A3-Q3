import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3010;
const app = express();

app.use(express.json(),express.urlencoded({extended: true}));

app.get("/", (req, res) => { res.sendFile(__dirname +'/Exercise3.html');});


app.post('/submit',(req,res)=>{
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const phoneNumber = req.body.phone;
    if(phoneRegex.test(phoneNumber)){
        res.send(`Thank you,   ${req.body.name} .Your phone number has been successfully validated!`);
    }
    else{
        res.send("The phone number is invalid. It must be in the format: ddd-ddd-dddd.");
    }
});
app.listen(port, () => console.log(`Server listening on port ${port}`));