import { Button, Form, Input, Modal } from "antd";
import React from "react";
import * as types from "../../Store/types";

import { SlLogin, SlClose, SlLogout } from "react-icons/sl";
import { connect, useDispatch } from "react-redux";

//Custom stylesheet(s)
import "./footer.css";

const mapStateToProps = (data) => {
	return data;
};

const Footer = connect(mapStateToProps)((data) => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const [openModal, setOpenModal] = React.useState(false);

	const onLogout = () => {
		if (data.user.loggedIn !== false) {
			dispatch({ type: types.LOGOUT });
		}
		setTimeout(() => {
			form.resetFields();
			setOpenModal(false);
		}, 1000);
	};

	const onFinish = (values) => {
		if (data.user.loggedIn !== true) {
			dispatch({ type: types.SET_USER, payload: values.username });
		}
		setTimeout(() => {
			form.resetFields();
			setOpenModal(false);
		}, 1000);
	};

	return (
		<div className="footerContainer">
			{data.user.loggedIn !== true && (
				<p className="footerLoginContainer" onClick={() => setOpenModal(true)}>
					<SlLogin /> Logga in
				</p>
			)}
			{data.user.loggedIn !== false && (
				<p className="footerLoginContainer" onClick={onLogout}>
					<SlLogout /> Logga ut
				</p>
			)}
			<div className="footerContent">
				<div className="footerInformation">
					<p>
						Contact: <a href="https://apps.hydroware.com/">Hydroware</a>
					</p>
					<p>
						Email:
						<a href="mailto:support@hydroware.se"> support@hydroware.se</a>
					</p>
					<p>
						Phone: <a href="tel:+46 (0)472-451 56">+46 (0)472-451 56</a>
					</p>
				</div>
				<div className="footerCopyRight">
					<p>Copyright © 2020 - Hydroware AB</p>
				</div>
			</div>
			<Modal
				title="Logga in"
				open={openModal}
				footer={null}
				closeIcon={<SlClose />}
				onCancel={() => setOpenModal(false)}
			>
				<div>
					<Form form={form} onFinish={onFinish}>
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

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Logga in
							</Button>
						</Form.Item>
					</Form>
				</div>
			</Modal>
		</div>
	);
});

export default Footer;
