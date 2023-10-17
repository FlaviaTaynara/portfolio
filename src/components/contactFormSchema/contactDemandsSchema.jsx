// components/contactFormschema/ContactDemandsSchema.jsx
import * as Yup from "yup";

const ContactDemandsSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Please enter your email."),
  message: Yup.string().required("Please enter your message."),
});

export default ContactDemandsSchema;
