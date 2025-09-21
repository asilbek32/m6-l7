import React from "react";
import { useParams } from "react-router-dom";

function ContactItem() {
  const { id } = useParams();
  return <div>ContactItem {id}</div>;
}

export default ContactItem;
