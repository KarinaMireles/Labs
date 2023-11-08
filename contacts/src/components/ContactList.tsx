import React from "react";
import ContactCard from "./ContactCard";
import { Contact } from "../../models/contact";

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => (
  <div style={{ padding: "20px" }}>
    <h2 style={{ color: "#ecf2f4" }}>Contacts</h2>
    {contacts
      .sort((a, b) => a.lastName.localeCompare(b.lastName))
      .map((contact, index) => (
        <ContactCard key={index} contact={contact} />
      ))}
  </div>
);

export default ContactList;
