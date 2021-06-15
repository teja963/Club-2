
//  function sendmail(){

//        var name = $('#name').val();
//        var email = $('#email').val();
//        var subject = $('#subject').val();
//        var message = $('#message').val();

//        // var body = $('#body').val();

//        var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
//        //console.log(name, phone, email, message);

//        Email.send({
//            SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
//            To: 'panasateja123@gmail.com',
//            From: email,
//            Subject: "Enquire Club FeedBack from "+name,
//            Body: Body
//        }).then(
//            message =>{
//                if(message=='OK'){
//                alert('Your message has been sent successfully.');}
//                else{
//                    console.error (message);
//                    alert('Unable to send your message,Please try again !')
                   
//                }

//            }
//        );



//    }

function sendmail(params){
    var tempParams = {
        from_name : document.getElementById("name").value,
        id_subject : document.getElementById("subject").value,
        id_email : document.getElementById("email").value,
        id_message : document.getElementById("message").value,
       
    };
    emailjs.send('service_5imors2','template_h0xvtdu',tempParams)
.then(function(res){
        console.log("success",res.status)
        if(res.status!=200)alert("Unable to sent your message");
        else alert("Your message was sent successfully");
    })
}