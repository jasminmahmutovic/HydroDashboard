import React from "react";

import {
	SlPeople,
	SlList,
	SlScreenTablet,
	SlScreenDesktop,
	SlCalculator,
	SlOrganization,
	SlEarphonesAlt,
	SlBulb,
	SlChart,
} from "react-icons/sl";
//Imported components
import { Button } from "antd";

//Custom stylesheet(s)
import "./body.css";
import { connect } from "react-redux";

const mapStateToProps = (data) => {
	return data;
};

const Body = connect(mapStateToProps)((data) => {
	return (
		<div className="bodyContainer">
			<h1>Våra appar</h1>
			<div className="buttonContainer">
				<Button className="buttonStyles" href="http://www.hydroware.com/Webrel">
					<SlList style={{ fontSize: "5rem" }} />
					WebRel
				</Button>
				<Button className="buttonStyles" href="http://www.hydroware.com/apps">
					<SlScreenTablet style={{ fontSize: "5rem" }} /> HydroApp
				</Button>
				<Button className="buttonStyles" href="https://apps.hydroware.com/iot">
					<SlScreenDesktop style={{ fontSize: "5rem" }} />
					IOT
				</Button>
				<Button className="buttonStyles" disabled>
					<SlPeople style={{ fontSize: "5rem" }} />
					CMP
				</Button>
				<Button className="buttonStyles" disabled>
					<SlCalculator style={{ fontSize: "5rem" }} />
					Webcalc
				</Button>
			</div>
			{data.user.loggedIn === true && <h1>Mina Appar</h1>}
			{data.user.loggedIn === true && (
				<div className="buttonContainer2">
					<Button className="buttonStyles" disabled>
						<SlOrganization style={{ fontSize: "5rem" }} />
						Provningsappen
					</Button>
					<Button className="buttonStyles" disabled>
						<SlBulb style={{ fontSize: "5rem" }} />
						Akilles
					</Button>
					<Button className="buttonStyles" disabled>
						<SlEarphonesAlt style={{ fontSize: "5rem" }} />
						Support
					</Button>
					<Button className="buttonStyles" disabled>
						<SlChart style={{ fontSize: "5rem" }} />
						HydCalc
					</Button>
				</div>
			)}
		</div>
	);
});

export default Body;
