var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'guadalupeanaconde@gmail.com',
    subject: 'contacto desde la web',
    html: nombre + " se contcato por" + email +"hizo comentario"+ mensaje + "contactarse telefono" + telefono
   } //cierra var de objeto
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_POST,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  }); //CIERRA TRANSPORT
  var info = await transport.sendMail(obj);
  res.render('index', {
    message: 'mensaje enviado correctamente',
  });
}); //cierra peticion del post


module.exports = router;
