import React from "react";

function Footer() {
  var curr = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {curr} </p>
    </footer>
  );
}
export default Footer;
