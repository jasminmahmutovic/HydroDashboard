import React from "react";

//Redux
import { connect, useDispatch } from "react-redux";
import * as types from "../../Store/types";

//Antd
import { Button, Form, Input, message, Modal, Tooltip } from "antd";

//Assets
import { SlLogin, SlClose, SlLogout } from "react-icons/sl";
import { QuestionCircleFilled } from "@ant-design/icons";
import Logo from "../../assets/hydroware_logotype_black.png";

//Custom stylesheet(s)
import "./header.css";

const mapStateToProps = (data) => {
	return data;
};

const Header = connect(mapStateToProps)((data) => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const [openModal, setOpenModal] = React.useState(false);
	const validUser = {
		username: "hydroware",
		password: "kodak123",
	};

	const onLogout = () => {
		if (data.user.loggedIn !== false) {
			dispatch({ type: types.LOGOUT });
		}
		form.resetFields();
		setOpenModal(false);
	};

	const onFinish = (values) => {
		if (data.user.loggedIn !== true) {
			if (
				values.username === validUser.username &&
				values.password === validUser.password
			) {
				dispatch({ type: types.SET_USER, payload: values.username });
				form.resetFields();
				setOpenModal(false);
			} else {
				return message.error("Felaktigt användarnamn eller lösenord");
			}
		}
	};

	return (
		<div className="container">
			<img src={Logo} alt="Hydroware logo" />
			<div className="rightSideHeader">
				<Tooltip
					className="tooltip"
					title="Click on an application to navigate to it"
					placement="bottomRight"
				>
					<QuestionCircleFilled />
				</Tooltip>
				{data.user.loggedIn !== true && (
					<p className="loginButton" onClick={() => setOpenModal(true)}>
						Login <SlLogin />
					</p>
				)}
				{data.user.loggedIn !== false && (
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
								label="Användarnamn"
								name="username"
								rules={[
									{
										required: true,
										message: "Vänligen skriv in ditt användarnamn",
									},
								]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label="Lösenord"
								name="password"
								rules={[
									{
										required: true,
										message: "Vänligen skriv in korrekt lösenord",
									},
								]}
							>
								<Input.Password />
							</Form.Item>

							<Form.Item
								wrapperCol={{
									offset: 8,
									span: 16,
								}}
							>
								<Button type="primary" htmlType="submit">
									Logga in
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
