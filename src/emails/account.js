const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'kashyap.robin.9277@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancellationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'kashyap.robin.9277@gmail.com',
        subject:'Goodbye!',
        text:`Hope you enjoyed, ${name}. Is there anything that we could've done to improve our service?`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}