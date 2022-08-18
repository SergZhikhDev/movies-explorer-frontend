import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h5 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h5>
      <hr className="line line_footer"></hr>

      <div className="footer__container">
        <p className="footer__copyright">© 2022.</p>

        <ul className="social-nets social-nets_footer">
          <li className="social-nets__item social-nets__item_footer">Яндекс.Практикум</li>
          <li className="social-nets__item social-nets__item_footer">Github</li>
          <li className="social-nets__item social-nets__item_footer">Linkedin</li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
