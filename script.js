document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        document.getElementById("form-message").textContent = "Please fill in all fields.";
        return;
    }

    // You can add code here to handle form submission, like sending an email or saving to a database.
    // For now, let's just display a success message.
    document.getElementById("form-message").textContent = "Message sent successfully!";
});
