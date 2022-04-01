import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q33gqwn",
        "template_i7zqy6m",
        form.current,
        "9yzWlq5aCp3qqfOQC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rfnoche@gmail.com</h5>
            <a href="mailto:rfnoche@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@ronnoche</h5>
            <a href="https://twitter.com/ronnoche" target="_blank">
              Say hi!
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="name@email.com"
            required
          />
          <textarea name="message" rows="7" placeholder="Say hi!"></textarea>
          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
