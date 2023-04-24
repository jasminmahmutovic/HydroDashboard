import React from "react";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

//Redux
import { connect, useDispatch } from "react-redux";
import * as types from "../../Store/types";
import * as userActions from "../../Store/api/login";
import { bindActionCreators } from "@reduxjs/toolkit";

//Antd
import { Button, Form, Input, Modal } from "antd";

//Assets
import { SlLogin, SlClose, SlLogout } from "react-icons/sl";

import Logo from "../../assets/hydroware_logotype_black.png";

//Custom stylesheet(s)
import "./header.css";

const mapStateToProps = ({ user }) => {
  return { user };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...userActions }, dispatch);
};

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ user, LoginUser, GetUserOrg }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = React.useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onLogout = () => {
    if (user.loggedIn !== false) {
      dispatch({ type: types.LOGOUT });
    }
    form.resetFields();
    setOpenModal(false);
  };

  const onFinish = React.useCallback(
    async (values) => {
      const recaptchatoken = await executeRecaptcha();
      await LoginUser(values, recaptchatoken);
      await GetUserOrg(values.email);
      setOpenModal(false);
    },
    [executeRecaptcha]
  );

  return (
    <div className="container">
      <img src={Logo} alt="Hydroware logo" />
      <div className="rightSideHeader">
        {user.loggedIn !== true && (
          <p className="loginButton" onClick={() => setOpenModal(true)}>
            Login <SlLogin />
          </p>
        )}
        {user.loggedIn !== false && (
          <p className="loginButton" onClick={onLogout}>
            Logout <SlLogout />
          </p>
        )}
        <Modal
          title="Logga in"
          open={openModal}
          footer={null}
          closeIcon={<SlClose />}
          onCancel={() => setOpenModal(false)}
        >
          <div>
            <Form
              form={form}
              onFinish={onFinish}
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
});

export default Header;
