import React from "react";

//import CSS
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact-item py-5">
      <div className="container">
        <div className="row w-75" style={{ margin: "auto" }}>
          <h2 className="text-center text-white py-5">Get in touch</h2>
          <div className="row">
            <div className="col-md-12 col-sm-12 px-5">
              <div className="form-item my-4">
                <label className="contact-form-label">Name *</label> <br />
                <input type="text" className="contact-form-item" />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 px-5">
              <div className="form-item my-4">
                <label className="contact-form-label">Organisation *</label>{" "}
                <br />
                <input type="text" className="contact-form-item" />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 px-5">
              <div className="form-item my-4">
                <label className="contact-form-label">Position *</label> <br />
                <input type="text" className="contact-form-item" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 px-5">
              <div className="form-item my-4">
                <label className="contact-form-label">Email *</label> <br />
                <input type="text" className="contact-form-item" />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 px-5">
              <div className="form-item my-4">
                <label className="contact-form-label">Subject *</label> <br />
                <input type="text" className="contact-form-item" />
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-md-12 col-sm-12 py-4 px-5 form-item">
              <label className="contact-form-label">Message *</label> <br />
              <textarea rows={3} className="w-100" />
            </div>
            <div className="col-md-3 col-sm-12 py-4 px-5 form-item">
              <button className="btn btn-submit w-100 border-0">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
