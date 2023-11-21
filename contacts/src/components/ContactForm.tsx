import React from "react";

const ContactForm: React.FC = () => (
  <form style={{ padding: "20px" }}>
    <div>
      <input type="text" placeholder="First Name" />
    </div>
    <div>
      <input type="text" placeholder="Last Name" />
    </div>
    <div>
      <input type="tel" placeholder="Phone Number" />
    </div>
    <div>
      <label>
        Favorite <input type="checkbox" />
      </label>
    </div>
  </form>
);

export default ContactForm;
