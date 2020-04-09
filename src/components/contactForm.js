import React from "react";
import styled from "styled-components";

const ContactLabel = styled.label`
  margin: 2px 0;
  font-size: 12pt;
`;

const ContactInput = styled.input`
  font-family: inherit;
  font-size: 12pt;
  height: 30px;
  border-radius: 4px;
  width: 100%;
  margin: 4px 0;
`;

const ContactTextArea = styled.textarea`
  font-family: inherit;
  font-size: 12pt;
  width: 100%;
  height: 200px;
  border-radius: 4px;
  margin: 4px 0;
`;

const ContactFormButton = styled.button`
  display: block;
  font-family: inherit;
  font-weight: 800;
  font-style: italic;
  font-size: 12pt;
  width: 30%;
  height: 30px;
  border-radius: 4px;
  background-color: #f7c036;
  margin: 12px auto;
`;

function ContactForm() {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/?contact=true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <ContactLabel htmlFor="name">Name</ContactLabel>
      </div>
      <div>
        <ContactInput type="text" name="name" />
      </div>
      <div>
        <ContactLabel htmlFor="email">Email</ContactLabel>
      </div>
      <div>
        <ContactInput type="email" name="email" />
      </div>
      <div>
        <ContactLabel htmlFor="message">Message</ContactLabel>
      </div>
      <div>
        <ContactTextArea name="message" />
      </div>
      <div>
        <ContactFormButton>Submit</ContactFormButton>
      </div>
    </form>
  );
}

export default ContactForm;
