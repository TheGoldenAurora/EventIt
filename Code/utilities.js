//Function for Sending mail
exports.IsMail=function(mail)
{
    var Regex = require("regex");
    var regex = new Regex(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/);
    return regex.test(mail);
}
exports.MailSend=function(recipient,message)
{
    var nodemailer=require('nodemailer');
    var transporter = nodemailer.createTransport
    (
        {
            service: 'gmail',
            auth: 
            {
                user: 'ninju26@gmail.com',
                pass: 'NiNjU1998+'
            }
        }
    );
    var mailOptions = 
    {
        from: 'ninju26@gmail.com',
        to: ''+recipient+'',
        subject: 'Event It Mail Update',
        text:''+message+'\nWith Regards,\nTeam EventIt.'
    };
    transporter.sendMail(mailOptions, function(error, info)
    {
        if (error) 
        {
            console.log(error);
        } 
        else 
        {
            console.log('Email sent: ' + info.response);
        }
        return;
    });
}
exports.SendSMS=function(recipient,message){

}
