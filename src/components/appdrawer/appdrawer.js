import React from "react";

//Redux
import { connect } from "react-redux";

//Assets
import { FaCodeBranch } from "react-icons/fa";
import { QuestionCircleFilled } from "@ant-design/icons";
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
  BsFillHouseFill,
} from "react-icons/bs";

//Antd components
import { Button, Tooltip } from "antd";

//Custom stylesheet(s)
import "./appdrawer.css";

const mapStateToProps = (data) => {
  return data;
};

const AppDrawer = connect(mapStateToProps)((data) => {
  return (
    <div className="bodyContainer">
      <div className="appdrawerHeader">
        <h1>Public</h1>
        <Tooltip
          className="tooltip"
          title="Click on an application to navigate to it"
          placement="bottomRight"
        >
          <QuestionCircleFilled />
        </Tooltip>
      </div>
      <div className="appsContainer">
        <div className="buttonContainer">
          <Button
            className="buttonStyles"
            href="http://www.hydroware.com/"
            target="_blank"
          >
            <BsFillHouseFill style={{ fontSize: "5rem", color: "#c50068" }} />
          </Button>
          <p>Hydroware</p>
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
            href="http://www.hydroware.com/web/program/PowerUnitCalculation_Vidi/PowerUnitCalculation.htm"
            target="_blank"
          >
            <BsCalculatorFill style={{ fontSize: "5rem", color: "#c50068" }} />
          </Button>
          <p>HydCalc - Dimensioning</p>
        </div>
      </div>
      {data?.user?.loggedIn && data?.user?.org?.org === "hydroware" && (
        <div className="myappsdrawerHeader">
          <h1>My Apps</h1>
        </div>
      )}
      {data.user.loggedIn === true && data?.user?.org?.org === "hydroware" && (
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
              href="http://192.168.3.25"
              target="_blank"
            >
              <FaCodeBranch style={{ fontSize: "5rem", color: "#c50068" }} />
            </Button>
            <p>
              Lift testing <br /> application
            </p>
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
            <p>Support log</p>
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
            <p>HydCalc - Price Calculation</p>
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
          <div className="buttonContainer">
            <Button
              className="buttonStyles"
              href="https://apps.hydroware.com/iot"
              target="_blank"
            >
              <BsFillCloudsFill
                style={{ fontSize: "5rem", color: "#c50068" }}
              />
            </Button>
            <p>IoT</p>
          </div>
          <div className="buttonContainer">
            <Button
              className="buttonStyles"
              href="https://cloud.hydroware.com/login"
              target="_blank"
            >
              <BsFillCloudsFill
                style={{ fontSize: "5rem", color: "#c50068" }}
              />
            </Button>
            <p>IoT H2</p>
          </div>
          <div className="buttonContainer">
            <Button
              className="buttonStyles"
              href="https://apps.hydroware.com/cmp"
              target="_blank"
            >
              <BsFillPeopleFill
                style={{ fontSize: "5rem", color: "#c50068" }}
              />
            </Button>
            <p>CMP</p>
          </div>
        </div>
      )}
    </div>
  );
});

export default AppDrawer;
