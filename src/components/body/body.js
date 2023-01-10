import React from "react";

import {
	TabletFilled,
	UnorderedListOutlined,
	LaptopOutlined,
	TeamOutlined,
} from "@ant-design/icons";
//Imported components
import { Button } from "antd";

//Custom stylesheet(s)
import "./body.css";

const Body = () => {
	return (
		<div className="bodyContainer">
			<Button
				className="buttonContainer"
				href="http://www.hydroware.com/Webrel"
			>
				<UnorderedListOutlined style={{ fontSize: "5rem" }} />
				WebRel
			</Button>
			<Button className="buttonContainer" href="http://www.hydroware.com/apps">
				<TabletFilled style={{ fontSize: "5rem" }} /> HydroApp
			</Button>
			<Button className="buttonContainer" href="https://apps.hydroware.com/iot">
				<LaptopOutlined style={{ fontSize: "5rem" }} />
				IOT
			</Button>
			<Button className="buttonContainer" disabled>
				<TeamOutlined style={{ fontSize: "5rem" }} />
				CMP
			</Button>
		</div>
	);
};

export default Body;
