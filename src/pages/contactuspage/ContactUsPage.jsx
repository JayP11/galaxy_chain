import React, { useEffect } from "react";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ContactUsPage_main">
      {/* <div className="" style={{ marginBottom: "1rem" }}> */}
      <div className="heading">
        <h1>CONTACT US</h1>
      </div>
      <div className="underline"></div>
      {/* </div> */}
      <div className="ContactUsPage_form">
        <form className="c_form">
          <h4 className="c-lbl">Name</h4>
          <input type="text" placeholder="" className="c-txt" />
          <h4 className="c-lbl">Number</h4>
          <input
            type="text"
            placeholder=""
            name="field-name"
            // value={number}
            maxLength={10}
            className="c-txt"
            //   onChange={(e) => {
            //     if (mobileValidate(e.target.value)) {
            //       setnumber(e.target.value);
            //     }
            //   }}
          />

          <h4 className="c-lbl">Email</h4>
          <input type="text" placeholder="" className="c-txt" />
          <h4 className="c-lbl">Subject</h4>
          <input
            type="text"
            placeholder=""
            //   value={subject}
            //   onChange={(e) => setsubject(e.target.value)}
            className="c-txt"
          />
          <h4 className="c-lbl">Description</h4>
          <textarea
            placeholder="Please leave message here..."
            //   value={description}
            className="c-msg-txt"
            //   onChange={(e) => setdescription(e.target.value)}
          ></textarea>
        </form>
        <iframe
          className="map_inner"
          style={{ border: "none", borderRadius: "10px" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14779.804027816699!2d70.7930374!3d22.1659369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca12b00ed20f%3A0xcbc672e57c682c8e!2sGalaxy%20Chains%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1703591604453!5m2!1sen!2sin"
          // width="530px"
          // height="370"
          // width="100%"
          title="galaxychain"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactUsPage;
