
function handleForm(e) {
      console.log(document.getElementById("email"))
      let d1 = "0984EF492"
      let d2 = "C0C01C11D8"
      let d3 = "53FB9CECC"
      let mistry_data_cool_data010 = "FA715789"
      if(document.getElementById("message").value 
        && document.getElementById("email").value 
        && document.getElementById("number").value 
        && document.getElementById("name").value 
        ) {
          let messageBody = `Name: ${document.getElementById("name").value}\n\n<br/> Email: ${document.getElementById("email").value} \n\n<br/> Contact: ${document.getElementById("number").value} \n\n<br/> Message: ${document.getElementById("message").value}`
          Email.send({
            Host: "smtp.elasticemail.com",
            Username: "noreply.nikared@gmail.com",
            Password: d1+d2+d3+mistry_data_cool_data010,
            To: "contact.nikared@gmail.com",
            From: "noreply.nikared@gmail.com",
            Subject: "New contact from Enquiry",
            Body: messageBody,
          }).then((message) => {
            alert(message);
            document.getElementById("invalidData").style.display = "none";
            reset();
          });
          
      } else {
        document.getElementById("invalidData").style.display = "block";
      }
    
    return false;
  }

  function reset() {
    document.getElementById("message").value = ""
    document.getElementById("email").value = ""
    document.getElementById("number").value = ""
    document.getElementById("name").value = ""
  }