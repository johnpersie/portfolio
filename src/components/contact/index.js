import { useRef, useState } from "react";
import {
  Container,
  ContainerWrapper,
  TextContent,
  Text,
  Heading,
  CardContainer,
  Roll,
  Col,
  Cols,
  HeadingContainer,
  ImgContainer,
  Content,
  FormContainer,
} from "./contactStyles";
import Card from "./Data";
import emailjs from "@emailjs/browser";
import Alert from "../alert";

function Contact() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 10000);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent", result.text);
          showAlert(
            "Message sent",
            "I will get back to you as soon as possible"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container>
      <ContainerWrapper>
        <TextContent>
          <h4>Need a beautiful, fast and interactive website?</h4>
          <h1>
            Let's get it <span>started.</span>
          </h1>
        </TextContent>
        <FormContainer>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder=""
                  id="user_name"
                  autoComplete="off"
                  required
                />
                <label htmlFor="user_name">Name</label>
              </div>
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder=""
                  id="user_email"
                  autoComplete="off"
                  required
                />
                <label htmlFor="user_email">Email</label>
              </div>
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="20"
                required
                placeholder=""
              />
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit">Send</button>
          </form>

          <Alert alert={alert} />
        </FormContainer>

        <CardContainer>
          <HeadingContainer>
            <Heading>Code & Design Presence</Heading>
            <Text>Other platforms I code, design and connect with.</Text>
          </HeadingContainer>
          <Roll>
            <Cols>
              {Card.map((item) => (
                <Col href={item.link} key={item.id}>
                  <Content>
                    <p>{item.name}</p>
                    <p>{item.text}</p>
                  </Content>
                  <ImgContainer>
                    <img src={item.img} alt="card-icons" />
                  </ImgContainer>
                </Col>
              ))}
            </Cols>
          </Roll>
        </CardContainer>
      </ContainerWrapper>
    </Container>
  );
}

export default Contact;
