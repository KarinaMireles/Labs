import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { Contact } from "../../models/contact";

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const formattedPhoneNumber = contact.phoneNumber.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "$1-$2-$3"
  );

  return (
    <div
      style={{ border: "1px solid #5a7d7c", margin: "10px 0", padding: "10px" }}
    >
      <div>
        {contact.firstName} {contact.lastName}
      </div>
      <div>{formattedPhoneNumber}</div>
      <FontAwesomeIcon
        icon={contact.isFavorite ? solidHeart : regularHeart}
        style={{ color: "#e36940", cursor: "pointer" }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
        onClick={() =>
          console.log(
            `Toggle favorite status for ${contact.firstName} ${contact.lastName}`
          )
        }
      />
    </div>
  );
};

export default ContactCard;
