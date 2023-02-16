import React from "react";
import "./contact.scss"

function Contact() {
    return (
        <>
            <article>
                <h1> Contact form </h1>{" "}
                <h2>
                    Please complete the form below so we can forward your contact request
                    to Julius Githinji:
                </h2>{" "}
                <form
                    id="my-form"
                    action="https://formspree.io/f/mnqwbple"
                    method="POST"
                >
                    <div className="container">
                        <h1> Hi Julius, </h1>{" "}
                        <div className="info">
                            <div> I am </div>{" "}
                            <div className="input-box">
                                <div className="small"> First Name and Last Name * </div>{" "}
                                <input
                                    maxlength="96"
                                    placeholder="First Name Last Name"
                                    type="text"
                                    value=""
                                    name="fullName"
                                    required
                                />
                            </div>{" "}
                            <div> from </div>{" "}
                            <div className="input-box">
                                <div className="small"> Company Name </div>{" "}
                                <input
                                    maxlength="100"
                                    placeholder="Company Name"
                                    type="text"
                                    value=""
                                    name="companyName"
                                />
                            </div>{" "}
                        </div>{" "}
                        <div> and I’ m contacting you to *: </div>{" "}
                        <div className="smaller">
                            Please state reason(s) why you 're reaching out:{" "}
                        </div>{" "}
                        <div>
                            <legend>
                                <label for="message"> Your Message goes below </label>{" "}
                                {/* <br> */}{" "}
                                <textarea
                                    className="message"
                                    name="message"
                                    id="someText"
                                    required
                                ></textarea>{" "}
                            </legend>{" "}
                        </div>{" "}
                        <div className="complete">
                            <div className="contacts">
                                <div className="input-box">
                                    <div className="q">
                                        ?
                                        <div className="why" id="hidden">
                                            We ask for your contact info to enable communication
                                            between You and Julius.We will never share it with 3 rd
                                            party sources.{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div className="small"> Email address * </div>{" "}
                                    <input
                                        placeholder="Email address"
                                        type="text"
                                        value=""
                                        name="emailAddress"
                                        required
                                    />
                                </div>{" "}
                                <div className="input-box">
                                    <div className="small"> Phone number </div>{" "}
                                    <input
                                        maxlength="20"
                                        placeholder="Phone number"
                                        type="text"
                                        value=""
                                        name="number"
                                    />
                                </div>{" "}
                            </div>{" "}
                            <div className="right">
                                <div> Looking forward to hearing from you! </div>{" "}
                                <div className="fullName"> First Name Last Name </div>{" "}
                                <button className="btn" type="submit">
                                    {" "}
                                    SEND→{" "}
                                </button>{" "}
                                <div id="status"> </div>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                </form>{" "}
            </article>{" "}
            <footer>
                <div className="socials">
                    <span className="invert git">
                        <img src="./assets/svg/github.svg" alt="" />{" "}
                    </span>{" "}
                    <span className="twitter">
                        <img src="./assets/svg/twitter-color.svg" alt="" />{" "}
                    </span>{" "}
                    <span className="linkedin">
                        <img src="./assets/svg/linkedin-square-color.svg" alt="" />{" "}
                    </span>{" "}
                </div>{" "}
                & copy; Julius Githinji• 2022{" "}
            </footer>{" "}
        </>
    );
}

export default Contact;
