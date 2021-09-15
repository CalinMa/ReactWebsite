import React from "react";
import "../CSS/Footer.css";

const Footer = (props) => {
    return (
      <footer >
          <ul className="d-flex justify-content-center">
          <li><a href="https://twitter.com/calin_marincas" target="_blank" class="social twitter">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/calin-marincas-950080180/" target="_blank" class="social linkedin">LinkedIn</a></li>
          <li><a href="https://github.com/CalinMa" target="_blank" class="social github">Github</a></li>
          <li><a href="https://www.instagram.com/codewithcalin" target="_blank" class="social instagram">Instagram</a></li>
          <li><a href="https://www.youtube.com/channel/UCXZjR9dsS9phjZ18PQJwb7A" target="_blank" class="social youtube">Youtube</a></li>
      </ul>
    <p className="d-flex justify-content-center">Contact:</p>
    <ul className="d-flex justify-content-center">
        <li><a href="mailto: calin.marincas@yahoo.com" class="social mail">Mail</a></li>
        <li><a href="tel:+40 742962132" class="social phone">Phone</a></li>
    </ul>
    <p className="d-flex justify-content-center">Copyright 2021, Calin Marincas</p>
      </footer>
    );
}
export default Footer;