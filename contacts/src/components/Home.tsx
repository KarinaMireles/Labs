import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { Contact } from "../../models/contact";

const Home: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    // Predefined contacts
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      isFavorite: false,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      isFavorite: false,
    },
  ]);

  return (
    <div>
      <ContactForm />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Home;
