import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <>
 <div className="contact-container">
      <h4 className="contact-title">Contact Us</h4>
      <h2 className="contact-heading">Let's Start a Conversation</h2>
      <p className="contact-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>

      <div className="contact-info">
        <div>
        <div className="con_haus">
        <h5>Working hours</h5>
    <p></p>
        </div>
          <p className="contact-bold">Monday To Friday <br />9:00 AM to 8:00 PM</p>
         
          <p className="contact-small">Our Support Team is available 24/7</p>
        </div>
        <div>
       <div className="con_haus">
       <h5>Contact Us</h5>
   <p></p>
       </div>
          <p className="contact-bold contact-number">020 7993 2905</p>
          <p className='contact-small'>hello@finsweet.com</p>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <select className="contact-input">
          <option>Query Related</option>
          <option>Support</option>
          <option>Sales</option>
          <option>Other</option>
        </select>
        <textarea placeholder="Message" className="contact-input contact-textarea"></textarea>
        <button className="contact-button">Send Message</button>
      </form>
    </div>
    </>
  )
}

export default Contact