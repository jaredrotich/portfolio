import React, { useState } from "react";
import SocialLinks from "../components/SocialLinks";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Network error");
    }
  }

  return (
    <main className="contact-container">
      {/* Left side - details */}
      <div className="contact-left">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:jaredrotich3@gmail.com">jaredrotich3@gmail.com</a></p>
        <p>Phone: <a href="tel:+254723467198">+254 723 467 198</a></p>
        <p>WhatsApp: <a href="https://wa.me/254723467198" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
        <SocialLinks />
      </div>

      {/* Right side - form */}
      <div className="contact-right">
        <h3>Send Me a Message</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === "sending"}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "sending"}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            disabled={status === "sending"}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={status === "sending"}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === "sending"}
          />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className="success-msg">Message sent — I will get back to you soon 🙌</p>}
          {status === "error" && <p className="error-msg">Error: {errorMsg}</p>}
        </form>
      </div>
    </main>
  );
}

export default Contact;
