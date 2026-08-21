import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="page">

      <section className="page-header">
        <h1>Contact Us</h1>

        <p>
          Have a question? Send us a message.
        </p>
      </section>

      <section className="contact-section">

        {submitted && (
          <div className="success-message">
            Message Sent Successfully!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="contact-form"
        >

          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>Message</label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="6"
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </div>
  );
}

export default Contact;