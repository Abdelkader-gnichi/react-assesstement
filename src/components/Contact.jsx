import './styles/Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Have questions about our fly fishing services? Reach out to us!</p>
            <div className="contact-details">
              <p><strong>Email:</strong> info@centraltexasflyfishing.com</p>
              <p><strong>Phone:</strong> (512) 555-1234</p>
              <p><strong>Address:</strong> 123 River Road, Austin, TX 78701</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;