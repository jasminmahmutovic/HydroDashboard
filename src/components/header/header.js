import React from "react";

//Antd
import { Tooltip } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

//Assets
import Logo from "../../assets/hydroware_logotype_white.png";

//Custom stylesheet(s)
import "./header.css";

const Header = () => {
	return (
		<div className="container">
			<img src={Logo} alt="Hydroware logo" />
			<Tooltip
				className="tooltip"
				title="Click on an application to navigate to it"
				placement="bottomRight"
			>
				<QuestionCircleFilled />
			</Tooltip>
		</div>
	);
};

export default Header;
