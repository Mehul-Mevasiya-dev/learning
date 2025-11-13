    const form = document.getElementById('contactform');
    const submitbtn = document.getElementById('submitbtn');
    const output = document.getElementById('output');
    
     submitbtn.addEventListener('click', function (event) {
       event.preventDefault();

       const name = document.getElementById("name").value;
       const email = document.getElementById("email").value;
       const message = document.getElementById("message").value;
       
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');


      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
      output.textContent = '';
     
      let isValid = true;

        if (name === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
      } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
      }

        if (message === '') {
        messageError.textContent = 'Message is required';
        isValid = false;
      }
        if (isValid) {
        output.innerHTML = `
          <strong>Submitted Data:</strong><br>
          Name: ${name}<br>
          Email: ${email}<br>
          Message: ${message}
        `;
        form.reset(); // clear form after submit
      }



     });
