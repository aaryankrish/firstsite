import React from 'react';

const Contact = () => {
    return (
        
        <section className="container-fluid" id="contact-form">
        <h1>contact us</h1>
        <p>We are always here to help out whatever way we can.</p>
        <form name="contact" method="POST" data-netlify="true" className="form">
            <label for="name">name <i class="fa fa-user"></i> </label>
            <input type="text" name="name" id="" className="form-control" placeholder="Name" required />
            <label for="email">email <i class="fa fa-envelope"></i> </label>
            <input type="email" name="email" id="" className="form-control" placeholder="Email" required />
            <label for="phno">mobile <i class="fa fa-phone"></i> </label>
            <input type="tel" name="phno" id="" className="form-control" placeholder="Mobile" required />
            <label for="msg">message <i className="fa fa-pencil"></i> </label>
            <textarea type="text" name="msg" id="" className="form-control" placeholder="Type..." required></textarea>
            <input type="submit" value="Post" className="submit form-control" />
            
            <div data-netlify-recaptcha="true"></div> 
        </form>
    </section>
     
    )
}


export default Contact;