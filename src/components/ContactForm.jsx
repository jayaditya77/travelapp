import "./ContactFormStyles.css"
import React from 'react'

const ContactForm = () => {
  return (
    <>
    <div className="form-container">
        <h1>Enquiry</h1>
        <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="subject" placeholder="Subject" required />
            <textarea placeholder="Message" row="4" required></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
  )
}

export default ContactForm
