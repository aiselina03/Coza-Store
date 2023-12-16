import React from "react";
import "./style.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ScrollToTop from "../../components/Scroll";

function Contact() {
  return (
    <>
      <div className="contactPage">
        <div className="contact">
          <h1>Contact</h1>
        </div>
        <div className="container">
          <div className="send">
            <div className="form">
              <Formik
                initialValues={{ firstName: "", lastName: "", email: "" }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                <Form>
                  <p>Send Us A Message</p>
                  <label htmlFor="email"></label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                    className="label"
                  />
                  <ErrorMessage name="email" />
                  <Field
                    name="message"
                    as="textarea"
                    className="form-textarea"
                    placeholder="How Can We Help?"
                  />
                  <button type="submit">SUBMIT</button>
                </Form>
              </Formik>
            </div>
            <div className="infos">
              <div className="info">
                <div className="location">
                  <p className="header">
                    <i class="fa-light fa-location-dot"></i> Address
                  </p>
                  <p className="address">
                    Coza Store Center 8th floor, 379 <br />
                    Hudson St, New York, NY 10018 US
                  </p>
                </div>
                <div className="talk">
                  <p className="header">
                    <i class="fa-light fa-phone"></i> Lets Talk
                  </p>
                  <p className="number">+1 800 1236879</p>
                </div>
                <div className="mail">
                  <p className="header">
                    <i class="fa-light fa-envelope"></i> Sale Support
                  </p>
                  <p className="mailAddress">contact@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d68400.13510028234!2d-74.14935246335048!3d40.74250179664903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25153abefda67%3A0x8971e805835b3a5b!2sFlyNYON%20Helicopter%20Tours!5e0!3m2!1sru!2sus!4v1701599686881!5m2!1sru!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <ScrollToTop/>
      </div>
    </>
  );
}

export default Contact;
