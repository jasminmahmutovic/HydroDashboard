import React from "react";

//Custom stylesheet(s)
import "./footer.css";

const Footer = () => {
	return (
		<div className="footerContainer">
			<div className="footerContent">
				<p>
					Contact: <a href="https://apps.hydroware.com/">Hydroware</a>
				</p>
				<p>
					Email: <a href="mailto:support@hydroware.se">support@hydroware.se</a>
				</p>
				<p>
					Phone: <a href="tel:+46 (0)472-451 56">+46 (0)472-451 56</a>
				</p>
			</div>
			<div className="footerCopyRight">
				<p>Copyright © 2020 - Hydroware AB</p>
			</div>
		</div>
	);
};

export default Footer;
