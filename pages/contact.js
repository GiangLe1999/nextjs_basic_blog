import Head from "next/head";

import ContactForm from "@/components/contact-page/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages." />
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
