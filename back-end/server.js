const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
const multer = require('multer');
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});
const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema({
  name: String,
  contact: String,
  desc: String,
  path: String
});

// connect to the database
mongoose.connect('mongodb://localhost:27017/initsplace', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

appointmentSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });

  appointmentSchema.set('toJSON', {
    virtuals: true
  });

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.get('/api/appointments', async (req, res) => {
  try {
    let appointments = await appointments.find();
    res.send({appointments: appointments});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/appointments', async (req, res) => {
     const appointment = new Appointment({
     name: req.body.name,
     contact: req.body.contact,
     desc: req.body.desc,
     path: req.body.path
   });
   try {
     await appointment.save();
     res.send({appointment:appointment});
   } catch (error) {
     console.log(error);
     res.sendStatus(500);
   }
 });

app.delete('/api/appointments/:id', async (req, res) => {
  try {
    await Appointment.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
app.listen(3000, () => console.log('Server listening on port 3000!'));
