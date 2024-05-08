import { Divider, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import wechat from "../../pictures/wechat.png";

const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const Contact = () => {
  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [yourMessage, setYourMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here,  can handle the form submission logic.
    const templateParams = {
      from_name: yourName,
      from_email: yourEmail,
      message: yourMessage,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      (response) => {
        setEmailStatus("Email sent successfully!");
        setTimeout(() => {
          setEmailStatus(null);
        }, 4000);

        setYourName("");
        setYourEmail("");
        setYourMessage("");
      },
      (err) => {
        setEmailStatus("There was an error sending the email.");
        setTimeout(() => {
          setEmailStatus(null);
        }, 4000);
      }
    );
  };

  const handleInputName = (e) => {
    setYourName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setYourEmail(e.target.value);
  };

  const handleInputMessage = (e) => {
    setYourMessage(e.target.value);
  };

  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
  const [isSmallerThan720] = useMediaQuery("(max-width: 720px)");
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <div id="contact" className="contactPage">
        <h2 className="bigH">Contact Me</h2>
        <Stack
          direction={isSmallerThan720 ? "column" : "row"}
          h="auto"
          p={isSmallerThan720 ? "8" : isSmallerThan1024 ? "90" : "110"}
        >
          <div
            className={`leftContainer ${isSmallerThan720 ? "hideDiver" : ""}`}
          >
            <div className="phoneContainer">
              <PhoneEnabledIcon fontSize="large" />
              {isSmallerThan480 ? (
                <a href="tel:0433080225" className="aboutPageTextLeft">
                  0433080225
                </a>
              ) : (
                <Text className="aboutPageTextLeft">0433080225</Text>
              )}
            </div>
            <AlternateEmailIcon fontSize="large" />
            <Text className="aboutPageTextLeft">liuyeemail@gmail.com</Text>
            <img src={wechat} alt="weChat" />
            <Text className="aboutPageTextLeft">liuye0225</Text>
            <HomeIcon fontSize="large" />
            <Text className="aboutPageTextLeft">Narre Warren, VIC 3805</Text>
          </div>
          <Divider orientation="vertical" padding={30} />

          <form className="forms" onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-basic1"
              label="Name"
              variant="outlined"
              value={yourName}
              onChange={handleInputName}
            />
            <TextField
              required
              type="email"
              id="outlined-basic2"
              label="Enter email"
              variant="outlined"
              value={yourEmail}
              onChange={handleInputEmail}
            />
            <TextField
              id="outlined-basic3"
              label="Message"
              multiline
              rows={6}
              value={yourMessage}
              variant="outlined"
              onChange={handleInputMessage}
            />
            {emailStatus && <p className="emailStatusMessage">{emailStatus}</p>}

            <Button
              className="button-container"
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              type="submit"
            >
              Send
            </Button>
          </form>
        </Stack>
      </div>
    </>
  );
};

export default Contact;
