import React, { useEffect, useState } from "react";
import "./ContactUsPage.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
// import { contact_us } from "../../utils/constants";
// import { mobileValidate } from "../..";


const ContactUsPage = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [subject, setsubject] = useState("");
  const [description, setdescription] = useState("");

  const contactApi = async () => {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexpMobile = /^[0-9\b]+$/;

    if (name == "") {
      Notification("error", "Error!", "Please enter your Name!");
      return;
    } else if (email == "") {
      Notification("error", "Error!", "Please enter your Email Address!");
      return;
    } else if (regEx.test(email) == false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (number === "") {
      alert("Enter the Mobile number....!");
      return;
    } else if (number.length < 10 || number.length > 10) {
      // alert("Enter valid mobile number...");
      Notification("error", "Error!", "Enter valid mobile number...");

      return;
    } else if (subject == "") {
      Notification("error", "Error!", "Please enter your Subject!");
      return;
    } else if (description == "") {
      Notification("error", "Error!", "Please enter some Description!");
      return;
    } else {
      const formData = new FormData();
      formData.append("name", name);
      //  formData.append("lastname", "test");
      formData.append("email", email);
      formData.append("number", number);
      formData.append("subject", subject);
      formData.append("description", description);
      //  formData.append("state_id", 12);
      //  formData.append("city_id", "779");
      console.log("formData contact us ", formData);

      const response = await axios
        .post(contact_us, formData, {
          headers: {
            Accept: "application/x.kingskraft.v1+json",
          },
        })
        .catch((error) => console.error(`Error: ${error}`));
      console.log("response contact us ", response.data);

      if (response.data.success == 1) {
        setname("");
        setemail("");
        setnumber("");
        setsubject("");
        setdescription("");

        Notification(
          "success",
          "Success!",
          "form has been successfully submitted"
        );
        return;
      } else {
        Notification("error", "Error!", "please enter valid data!");
        return;
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Contact</title>
      </Helmet>
      <div className="hero_path">
        <h1>
          <Link
            className="GetQuoteHome_main"
            to="/"
            style={{ minHeight: "100%" }}>
            Home&nbsp;&nbsp;/
          </Link>
          {"  "}
        </h1>
        &nbsp;&nbsp;
        <h1 className="GetQuoteHome_main" style={{ minHeight: "100%" }}>
          Contact us
        </h1>
        {/* <img src={images.about_banner} alt="" /> */}
      </div>
      <div className="ContactUsPage_main">
        {/* <div className="" style={{ marginBottom: "1rem" }}> */}
        {/* <div className="heading">
          <h1>CONTACT US</h1>
        </div> */}
        {/* <div className="underline"></div> */}
        {/* </div> */}
        <div className="ContactUsPage_form">
          <form className="c_form">
            <h4 className="c-lbl">Name</h4>
            {/* <input type="text" placeholder="" className="c-txt" /> */}
            <input
              type="text"
              placeholder=""
              value={name}
              className="c-txt"
              onChange={(e) => setname(e.target.value)}
            />
            <h4 className="c-lbl">Number</h4>
            <input
              type="text"
              placeholder=""
              name="field-name"
              value={number}
              maxLength={10}
              onChange={(e) => {
                if (mobileValidate(e.target.value)) {
                  setnumber(e.target.value);
                }
              }}
              className="c-txt"
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
            <button className="btn btn_form_red" onClick={() => contactApi()}>
              Submit
            </button>
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
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
