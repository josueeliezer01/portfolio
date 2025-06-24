import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./MailMeForm.css";

export default function MailMeForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("Enviando...");

    emailjs
      .send(
        "service_u1jxvvq",
        "template_zpciomz",
        formData,
        "s74KM-SUQ_Y6RE29W"
      )
      .then(() => {
        setStatusMessage("Email enviado com sucesso!");
        setFormData({ from_name: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatusMessage("Erro ao enviar email. Tente novamente.");
      });
  };

  return (
    <div className="mail-me-container">
      <h2 className="mail-me-title">Mail Me</h2>
      <form
        onSubmit={handleSubmit}
        className="mail-me-form">
        <label className="form-group">
          By:
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            placeholder="Your Name or Email"
          />
        </label>

        <label className="form-group">
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Email Subject"
          />
        </label>

        <label className="form-group">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Type your message here"
          />
        </label>

        <button
          type="submit"
          className="submit-button">
          Submit
        </button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
}
