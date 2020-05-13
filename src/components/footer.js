import React from "React"
import { Link } from "gatsby"
import logo from "../images/logo-orogold.png"
import footer from "../styles/footer.scss"

const Footer = () => (
  <div className="full-footer">
    <div className="container">
      <div className="footergroup">
        <div className="logo-group">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="info-group">
          <div className="group-1">
            <img
              src={require("../images/icon/mail.png")}
              alt=""
              className="logo"
            />
            <p>orogoldspa@orogold.com</p>
          </div>
          <div className="group-2">
            <img
              src={require("../images/icon/telephone.png")}
              alt=""
              className="logo"
            />
            <a href="tel:+525502630032">+ 52 550263002</a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
