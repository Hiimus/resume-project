function sendMail(contactForm) {
    emailjs.send("service_dt2dr7c", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
            console.log("FAILED...", error);
        });
        return false;
}

