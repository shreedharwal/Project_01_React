import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h2>Contact <span>TrackNest</span></h2>
                <p>Have questions or feedback? We'd love to hear from you!</p>





                <div className="features-grid-contact">
                    <div className="feature-contact">
                        <h3>📧 support@aifinancemanager.com</h3>
                    </div>
                    <div className="feature-contact">
                        <h3>📍123 AI Street, New York, NY 10001</h3>
                    </div>
                    <div className="feature-contact">
                        <h3>📞 +1 234 567 8900</h3>
                    </div>
                </div>

                <form className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="5" placeholder="Your Message" required />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;























































