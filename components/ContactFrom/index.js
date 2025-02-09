import React, { Component } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xzzdvebe");  // Replace "xzzdvebe" with your actual Formspree endpoint ID
  
  // If the form submission is successful, show a success message
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Lastname"
              required
            />
            <ValidationError
              prefix="Lastname"
              field="lastname"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-field">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-submit">
            <button className="template-btn" type="submit" disabled={state.submitting}>
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
