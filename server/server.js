const express = require('express');
const cors = require('cors');
const webpush=require('web-push');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());
//Public Key:
// BDSMc_SbEMMoi9cuC9kI-wMtKKHi9qtmtcWUWFl8GzC896NIKb5YoDfBK06m-cpobq3Ns4o3mCuyDT14curvi-8

// Private Key:
// HTAwkmz4RP1PXk3GexG3qBu4EHO3NvBCTPzLbghBrlk
const vapidKeys={
    public_key:"BDSMc_SbEMMoi9cuC9kI-wMtKKHi9qtmtcWUWFl8GzC896NIKb5YoDfBK06m-cpobq3Ns4o3mCuyDT14curvi-8",
    private_key:"HTAwkmz4RP1PXk3GexG3qBu4EHO3NvBCTPzLbghBrlk"
}
webpush.setVapidDetails('mailTo:abc@gmail.com',vapidKeys.public_key,vapidKeys.private_key);
// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const subDB=[];
app.post('/save-subscription',async(req,res)=>{
subDB.push(req.body);
return res.json({sucess:"sucess",message:"Subscribe object saved succesfully"});
})

app.get('/send-notification',(req,res)=>{
    webpush.sendNotification(subDB[0],"hello from express server");
    return res.json({sucess:"sucess",message:"Message sent to push servrice from server"});
})
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
