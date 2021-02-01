import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
const MessageForm = (props) => {
	const [value, setValue] = useState("");
	const { chatId, creds } = props;
	const handleSubmit = (e) => {
		e.preventDefault();
		const text = value.trim();
		if (text.length > 0) sendMessage(creds, chatId, { text });
		setValue("");
	};
	const handleChange = (e) => {
		setValue(e.target.value);
		isTyping(props, chatId);
	};
	const handleUpload = (e) => {
		sendMessage(creds, chatId, { files: e.target.files, text: "" });
    };
    const handleLogout = () => {
        localStorage.removeItem('myChatAppUsername');
        localStorage.removeItem('myChatAppPassword');
        window.location.reload();
    }
	return (
		<div style={{ display: "flex" }}>
			<form
				className="message-form"
				onSubmit={handleSubmit}
				style={{ flex: 0.9 }}
			>
				<input
					type="text"
					className="message-input"
					placeholder="Send a message . . . "
					value={value}
					onChange={handleChange}
					onSubmit={handleSubmit}
				/>
				<label htmlFor="upload-button">
					<span className="image-button">
						<PictureOutlined className="picture-icon" />
					</span>
				</label>
				<input
					type="file"
					multiple={false}
					id="upload-button"
					style={{ display: "none" }}
					onChange={handleUpload}
				/>
				<button type="submit" className="send-button">
					<SendOutlined className="send-icon" />
				</button>
			</form>
			<button
				style={{
					flex: 0.1,
					background: "rgb(117,84,160)",
					background:
						"linear-gradient(90deg, rgba(117,84,160,1) 7%, rgba(117,84,160,1) 17%, rgba(106,95,168,1) 29%, rgba(99,103,174,1) 44%, rgba(87,116,184,1) 66%, rgba(70,135,198,1) 83%, rgba(44,163,219,1) 96%, rgba(22,188,237,1) 100%, rgba(0,212,255,1) 100%)",
					border: 0,
					color: "white",
					borderRadius: "10px",
					marginLeft: "5px",
					cursor: "pointer",
				}}
                onClick={handleLogout}
			>
				Log Out
			</button>
		</div>
	);
};

export default MessageForm;
