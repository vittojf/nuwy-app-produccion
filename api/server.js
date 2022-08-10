const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const { google } = require("googleapis");
const multer = require("multer");
const fs = require("fs");
const sendMail = require("./gmail");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

/*

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:process.env.REFRESH_TOKEN})

const transport = nodemailer.createTransport(
 {
    service: "gmail",
    auth: {
   type:'OAuth2',
   user: process.env.EMAIL,
   clientId:process.env.CLIENT_ID,
   clientSecret: process.env.CLIENT_SECRET,
   refreshToken:process.env.REFRESH_TOKEN,
   accessToken: oAuth2Client.getAccessToken()

    },
  }
);
transport.use(
  "compile",
  hbs({
    viewEngine: {
      extname: ".handlebars",
      partialsDir: path.resolve("./views"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
  })
);

transport.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
*/
const storage = multer.diskStorage({
  destination: path.join(__dirname, "./public_html/", "uploads"),
  filename: function (req, file, cb) {
    // null as first argument means no error
    cb(null, file.originalname);
  },
});

app.post("/imageupload", async (req, res, next) => {
  try {
    // 'avatar' is the name of our file input field in the HTML form

    let upload = multer({ storage: storage }).single("avatar");

    upload(req, res, function (err) {
      // req.file contains information of uploaded file
      // req.body contains information of text fields
      //console.log(res)

      if (!req.file) {
        return res.send(res);
      } else if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).send(req.file);
    });

    //  return res;
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post("/send-mail", cors(), async (req, res, next) => {
  let body = req.body;

  try {
    let body = req.body;
    let mailOptions = {
      from: process.env.EMAIL,
      to: req.body.DatosUsuario.email,
      subject: `${req.body.DatosUsuario.name}, haz realizado una transferencia con Nuwy`,
      html: `
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <table role="presentation"
        style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;height: auto">
        <tbody>
            <tr>
                <td align="center" style="padding:0">
                    <table role="presentation"
                        style="width:550px;border-collapse:collapse;border:1px solid #ffff;border-spacing:0;text-align:center;">

                        <tbody>
                            <tr>
                                <td style="padding:36px 30px 42px 30px;text-align: center">
                                    <table role="presentation"
                                        style="width:100%;border-collapse:collapse;border:0;border-spacing:0;text-align: center">
                                        <tbody>
                                            <tr>
                                                <td style="padding:0 0 36px 0;color:#153643;text-align: center">
                                                    <h1
                                                        style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;color:#2A4372;">
                                                        NUWY</h1>
                                                    <p
                                                        style="margin:30px 0;font-size:20px;line-height:24px;font-family:Arial,sans-serif;font-weight: 700">
                                                        ¡Gracias por preferirnos!</p>

                                                    <p
                                                        style="margin:30px 0 20px 0;font-size:20px;line-height:10px;font-family:Arial,sans-serif;text-align: center">
                                                        Hemos recibido tu solicitud de remesa</p>
                                                    <p
                                                        style="margin:0;font-size:20px;line-height:10px;font-family:Arial,sans-serif;text-align: center">
                                                        Tu transacción está siendo procesada</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding:0;text-align: center; ">
                                            <tr>
                                                <td>
                                                    <p style="font-size: 13px; font-weight: 700;color: #18305D">Detalle
                                                        de la transacción</p>
                                                </td>
                                            </tr>
                                            <table role="presentation"
                                                style="width:100%;margin: auto;border-collapse:collapse;border:0;border-spacing:0;text-align: center;">

                                                <tbody>



                                                    <tr>
                                                        <td
                                                            style="width:260px;padding:0;vertical-align:top;color:#153643;text-align: start">

                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 700;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                                Enviaste</p>


                                                        </td>

                                                        <td
                                                            style="width:260px;padding:0;vertical-align:top;color:#153643;text-align: start">
                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 300;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                              $ ${req.body.emisor.value} ${req.body.emisor.country}</p>
                                                        </td>

                                                        <td style="width:20px;padding:0;font-size:0;line-height:0;">
                                                            &nbsp;</td>
                                                        <td
                                                            style="width:260px;padding:0;vertical-align:top;color:#153643;text-align: start">

                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 700;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                                Tipo de cambio</p>


                                                        </td>
                                                        <td
                                                            style="width:260px;padding:0;vertical-align:top;color:#153643;text-align: end">
                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 300;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                                ${req.body.rate}</p>
                                                        </td>


                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="width:260px;padding:0;vertical-align:top;color:#153643;text-align: start">

                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 700;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                                Recibirá</p>


                                                        </td>
                                                        <td
                                                            style="width:260px;padding:0;vertical-align:top;color:#153643;text-align: start">
                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 300;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                                $ ${req.body.receptor.value} ${req.body.receptor.country}</p>
                                                        </td>

                                                        <td style="width:20px;padding:0;font-size:0;line-height:0;">
                                                            &nbsp;</td>
                                                        <td
                                                            style="width:260px;padding:0;vertical-align:top;color:#153643;text-align: start">

                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 700;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                                Banco</p>


                                                        </td>
                                                        <td
                                                            style="width:260px;padding:0;vertical-align:top;color:#153643;text-align: end">
                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 300;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                                    ${req.body.DatosReceptor.banco}</p>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="width:260px;padding:0;vertical-align:top;color:#153643;text-align: start">

                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 700;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                                Tipo de cuenta</p>


                                                        </td>
                                                        <td
                                                            style="width:260px;padding:0;vertical-align:top;color:#153643;text-align: start">
                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 300;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                                 ${req.body.DatosReceptor.tipoCuenta}</p>
                                                        </td>

                                                        <td style="width:20px;padding:0;font-size:0;line-height:0;">
                                                            &nbsp;</td>
                                                        <td
                                                            style="width:260px;padding:0;vertical-align:top;color:#153643;text-align: start">

                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 700;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                                Nº de cuenta</p>


                                                        </td>
                                                        <td
                                                            style="padding:0;vertical-align:top;color:#153643;text-align: end">
                                                            <p
                                                                style="margin:0 0 12px 0;font-size:11px;font-weight: 300;line-height:24px;font-family:Arial,sans-serif;color:#2A4372;">
                                                                 ${req.body.DatosReceptor.nCuenta}</p>
                                                        </td>

                                                    </tr>



                                                </tbody>


                                            </table>

                                </td>



                            </tr>


                            <tr>
                                <td style="padding: 0;text-align: center;">
                                    <table
                                        style="width:100%;margin: auto;border-collapse:collapse;border:0;border-spacing:0;text-align: center;">
                                        <tbody>
                                            <tr>
                                                <p style="font-size: 20px">Por favor espera el próximo correo</p>
                                            </tr>
                                            <tr>
                                                <td
                                                    style="width: 100%; background: #2A4372; color: #ffff;padding: 1rem; font-size: 14px; ">
                                                    <p>Una vez verifiquemos la transacción te notificaremos en otro
                                                        correo cuando tu remesa haya sido enviada</p>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>

                                                    <img src="https://i.ibb.co/dJB5bs5/loading.png" style="margin: 1.5rem 0">

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </td>
            </tr>

        </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>



</body>

</html>
      
      `,
    };

    //res.status(200).send("correo enviado")

    await sendMail(mailOptions)
      .then((resMail) => {
        res.status(200);
        res.json({ message: "correo enviado", response: resMail });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } catch (err) {
    res.status(500).json(err);
  }

  try {
   
    var imagePath = path.join(
      __dirname,
      "/public_html/uploads/" + req.body.DatosCaptura?.fileName
    );
    let mailOptionsNuwy = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Han realizado una transferencia",
      html: `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  
  <body>
  
    <table role="presentation"
      style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;height: auto">
      <tbody>
        <tr>
          <td align="center" style="padding:0">
            <table role="presentation"
              style="width:480px;border-collapse:collapse;border:1px solid #ffff;border-spacing:0;text-align:center;">
  
              <tbody>
                <tr>
                  <td style="padding:36px 30px 42px 30px;text-align: center">
                    <table role="presentation"
                      style="width:100%;border-collapse:collapse;border:0;border-spacing:0;text-align: center">
                      <tbody>
                        <tr>
                          <td style="padding:0 0 0px 0;color:#153643;text-align: center">
                            <h1
                              style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;color:#2A4372;">
                              NUWY</h1>
                            <p
                              style="margin:30px 0;font-size:20px;line-height:24px;font-family:Arial,sans-serif;font-weight: 700">
                              Remesa a realizar</p>
  
  
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0;text-align: start; ">
  
                            <table role="presentation"
                              style="width:100%;border-collapse:collapse;border:0;border-spacing:0;text-align: start;">
  
                              <tbody>
  
  
                                <tr>
                                  <td style="text-align: start;">
                                    <p
                                      style="font-size: 18px; font-weight: 700;color: #18305D">
                                      Datos de la remesa</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style="width:100%;padding:0;vertical-align:top;color:#18305D;text-align: start">
  
                                    <p
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 700;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      Pais: <span
                                        style="color:#18305D;font-weight: 300; ">
                                        ${body.receptor.countryName} </span></p>
  
  
                                  </td>
  
  
  
  
                                </tr>
  
                                <tr>
                                  <td
                                    style="width:100%;padding:0;vertical-align:top;color:#153643;text-align: start">
                                    <p
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 700;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      Monto depositado en CLP: <span
                                        style="color:#18305D;font-weight: 300; ">$
                                        ${body.emisor.value} CLP</span></p>
  
  
  
                                  </td>
  
  
  
                                </tr>
                                <tr>
  
  
  
                                </tr>
  
                                <tr>
                                  <td
                                    style="width:100%;padding:0;vertical-align:top;color:#153643;text-align: start">
  
                                    <p
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 700;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      Tipo de cambio: <span
                                        style="color:#18305D;font-weight: 300; ">${req.body.rate}</span>
                                    </p>
  
  
  
                                  </td>
  
  
                                </tr>
  
  
  
  
  
                                <tr>
                                  <td style="text-align: start;">
                                    <p
                                      style="font-size: 18px; font-weight: 700;color: #18305D">
                                      Datos del emisor</p>
                                  </td>
                                </tr>
  
  
  
  
  
                                <tr>
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
  
                                    <p
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 700;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      Nombre: </p>
  
  
  
                                  </td>
                                  <td
                                    style="padding:0 ;vertical-align:top;color:#153643;text-align: start;margin-right: 5rem">
                                    <span
                                      style=" margin:0 0 12px 0;font-size:14px;line-height:16px;font-family:Arial,sans-serif color:#18305D;font-weight: 300; ">${body.DatosUsuario.name}</span>
                                  </td>
  
  
                                </tr>
  
                                <tr>
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
  
                                    <p
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 700;line-height:16px;font-family:Arial,sans-serif;color:#18305D !important;">
                                      RUT: </p>
  
  
  
                                  </td>
  
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
                                    <span
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 300;line-height:16px;font-family:Arial,sans-serif;color:#18305D !important;">
                                      ${body.DatosUsuario.rut}</span>
                                  </td>
                                </tr>
  
                                <tr>
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
  
                                    <p
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 700;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      Correo: </p>
  
  
  
                                  </td>
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
                                    <span
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 300;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      ${body.DatosUsuario.email}</span>
                                  </td>
  
                                </tr>
  
                                <tr>
                                  <td style="text-align: start;">
                                    <p
                                      style="font-size: 18px; font-weight: 700;color: #18305D">
                                      Datos del banco receptor</p>
                                  </td>
                                </tr>
  
  
  
  
                                <tr>
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
  
                                    <p
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 700;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      Banco: </p>	
  
  
  
                                  </td>
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
                                    <span
                                      style=" margin:0 0 12px 0;font-size:14px;line-height:16px;font-family:Arial,sans-serif; color:#18305D;font-weight: 300; ">${body.DatosReceptor.banco}</span>
                                  </td>
  
                                </tr>
  
                                <tr>
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
  
                                    <p
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 700;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      Nº de cuenta: </p>
  
  
  
                                  </td>
  
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
                                    <span
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 300;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      ${body.DatosReceptor.nCuenta}</span>
                                  </td>
                                </tr>
  
                                <tr>
                                  <td
                                    style="padding:0;vertical-align:top;color:#153643;text-align: start">
  
                                    <p
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 700;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      Tipo de cuenta: </p>
  
  
  
                                  </td>
                                  <td
                                    style="padding:0;vertical-align:top;color:#153643;text-align: start">
                                    <span
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 300;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      ${body.DatosReceptor.tipoCuenta}</span>
                                  </td>
  
  
                                </tr>
  
  
                                <tr>
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
  
                                    <p
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 700;line-height:16px;font-family:Arial,sans-serif;color:#18305D !important;">
                                      Nombre: </p>
  
  
  
                                  </td>
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
                                    <span
                                      style=" margin:0 0 12px 0;font-size:14px;line-height:16px;font-family:Arial,sans-serif color:#18305D;font-weight: 300; ">${body.DatosReceptor.name}</span>
                                  </td>
  
                                </tr>
  
                                <tr>
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
  
                                    <p
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 700;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      Pasaporte - C.I - DNI: </p>
  
  
  
                                  </td>
  
                                  <td
                                    style="width:;padding:0;vertical-align:top;color:#153643;text-align: start">
                                    <span
                                      style="margin:0 0 12px 0;font-size:14px;font-weight: 300;line-height:16px;font-family:Arial,sans-serif;color:#18305D;">
                                      ${body.DatosReceptor.dni}</span>
                                  </td>
                                </tr>
  
  
  
                              </tbody>
                            </table>
  
  
  
  
  
  
                          </td>
  
  
  
                        </tr>
  
  
                      </tbody>
                    </table>
                  </td>
                </tr>
  
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  
  
  </body>
  
  </html>`,
      attachments: [
        {
          filename: req.body.DatosCaptura?.fileName,
          path: imagePath,
        },
      ],
    };

 const responseMail = await sendMail(mailOptionsNuwy)
   console.log('respuesta',responseMail)
   
if(!String(responseMail).includes('')){
  console.log("aqui", resMail);
  fs.unlinkSync(imagePath);
  res.status(200);
  res.json({ message: "correo enviado", response: resMail });

}else{
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
    res.status(500);
    
    res.json({ err });
    throw err;
  } else {
    res.status(500);
    res.json({ err });
    throw err;
  }
}
    /*
    await transport.sendMail(mailOptionsNuwy, (err, data) => {
      if (err) {
        fs.unlinkSync(imagePath);
        res.status(500);
        throw err;
      } else {
        fs.unlinkSync(imagePath);
        return res.status(200).send("Correo Enviado!");
      }
    });*/
  } catch (err) {
    res.status(500)
    //res.json({ err });

  }
});

app.post("/send-mail-contact", async (req, res, next) => {
  try {
    let mailOptions = {
      to: process.env.EMAIL,
      subject: `Han realizado una Pregunta`,
      html: `<h5 style="font-size:15px">Recibiste un mensaje de:</h5>
    
     <p style="font-size:15px"><b> Email :</b> ${req.body.email}</p>
     
      <p style="font-size:15px"><b> Name:</b> ${req.body.name}</p>
   
      <p style="font-size:15px"><b>Message:</b> ${req.body.message}</p>`,
    };
    await sendMail(mailOptions)
      .then((resMail) => {
        console.log("respuesta", resMail);
        return res.status(200).json({ message: "correo enviado" });
      })
      .catch((err) => {
        console.log("error", err);
        return res.status(500).json(err);
      });
  } catch (error) {
    res.json(error);
  }
});
function throwObjWithStacktrace() {
  const someError = {statusCode: 500}
  Error.captureStackTrace(someError)
  throw someError;
}
app.listen(process.env.PORT || 8800, (req, res) => {
  console.log("server activo");
});

//
/*

//step 1

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})
,
    (err, data) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        console.log("CORREO ENVIADO",body);
      }
    }
//step 2

//step 3

transporter.sendMail(mailOptions,(err,data) =>{
    if(err){
        console.log('Error: ', err)
    }else{
        console.log('Correo enviado')
    }
})*/
