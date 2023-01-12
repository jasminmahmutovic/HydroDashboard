import React from "react";

//Redux
import { connect } from "react-redux";

//Assets
import { FaCodeBranch } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import {
	BsFillFileEarmarkFill,
	BsFillCloudsFill,
	BsFillGearFill,
	BsCalculatorFill,
	BsFillPeopleFill,
	BsFileEarmarkRuledFill,
	BsFileEarmarkZipFill,
	BsFillPatchQuestionFill,
} from "react-icons/bs";

//Antd components
import { Button } from "antd";

//Custom stylesheet(s)
import "./body.css";

const mapStateToProps = (data) => {
	return data;
};

const Body = connect(mapStateToProps)((data) => {
	return (
		<div className="bodyContainer">
			<h1>Apps</h1>
			<div className="appsContainer">
				<div className="buttonContainer">
					<Button
						className="buttonStyles"
						href="http://www.hydroware.com/Webrel"
						target="_blank"
					>
						<BsFillFileEarmarkFill
							style={{ fontSize: "5rem", color: "#c50068" }}
						/>
					</Button>
					<p>WebRel</p>
				</div>
				<div className="buttonContainer">
					<Button
						className="buttonStyles"
						href="http://www.hydroware.com/apps"
						target="_blank"
					>
						<BsFillPatchQuestionFill
							style={{ fontSize: "5rem", color: "#c50068" }}
						/>
					</Button>
					<p>HydroApp</p>
				</div>
				<div className="buttonContainer">
					<Button
						className="buttonStyles"
						href="https://apps.hydroware.com/iot"
						target="_blank"
					>
						<BsFillCloudsFill style={{ fontSize: "5rem", color: "#c50068" }} />
					</Button>
					<p>IoT</p>
				</div>
				<div className="buttonContainer">
					<Button
						className="buttonStyles"
						disabled
						// href="https://apps.hydroware.com/cmp"
						target="_blank"
					>
						<BsFillPeopleFill style={{ fontSize: "5rem", color: "#c50068" }} />
					</Button>
					<p>CMP</p>
				</div>
			</div>
			{data?.user?.loggedIn && <h1>My Apps</h1>}
			{data.user.loggedIn === true && (
				<div className="appsContainer">
					<div className="buttonContainer">
						<Button
							className="buttonStyles"
							href="http://192.168.3.25"
							target="_blank"
						>
							<FaCodeBranch style={{ fontSize: "5rem", color: "#c50068" }} />
						</Button>
						<p>Provningsappen</p>
					</div>
					<div className="buttonContainer">
						<Button
							className="buttonStyles"
							href="http://192.168.3.17:3000"
							target="_blank"
						>
							<BsFillGearFill style={{ fontSize: "5rem", color: "#c50068" }} />
						</Button>
						<p>Akilles</p>
					</div>
					<div className="buttonContainer">
						<Button
							className="buttonStyles"
							href="http://192.168.3.25:8994"
							target="_blank"
						>
							<SlEarphonesAlt style={{ fontSize: "5rem", color: "#c50068" }} />
						</Button>
						<p>Supportlog</p>
					</div>
					<div className="buttonContainer">
						<Button
							className="buttonStyles"
							href="http://www.hydroware.com/webold/program/default.htm"
							target="_blank"
						>
							<BsCalculatorFill
								style={{ fontSize: "5rem", color: "#c50068" }}
							/>
						</Button>
						<p>HydCalc</p>
					</div>
					<div className="buttonContainer">
						<Button
							className="buttonStyles"
							href="http://192.168.3.30/webcalc"
							target="_blank"
						>
							<BsFileEarmarkRuledFill
								style={{ fontSize: "5rem", color: "#c50068" }}
							/>
						</Button>
						<p>Webcalc</p>
					</div>
					<div className="buttonContainer">
						<Button
							className="buttonStyles"
							href="http://192.168.3.30/admin"
							target="_blank"
						>
							<BsFileEarmarkZipFill
								style={{ fontSize: "5rem", color: "#c50068" }}
							/>
						</Button>
						<p>Webcalc Admin</p>
					</div>
				</div>
			)}
		</div>
	);
});

export default Body;
