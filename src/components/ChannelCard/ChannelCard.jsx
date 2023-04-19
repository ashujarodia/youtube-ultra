import React from "react";
import "./ChannelCard.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
	console.log(channel);

	return (
		<Link to={`/channel/${channel?.channelId}`}>
			<div className="channel-card-container">
				<div className="image">
					<img
						src={channel?.avatar[0]?.url}
						alt=""
					/>
				</div>
				<div className="details">
					<span className="title">
						{channel?.title}
						{channel?.badges[0]?.type === "VERIFIED_CHANNEL" ? <BsFillCheckCircleFill /> : ""}{" "}
					</span>
					<span className="username">
						{channel?.username} . {channel?.subscribersText}
					</span>
					<span className="desc">{channel?.descriptionSnippet}</span>
				</div>
				<div className="subscribe-btn">
					<button>Subscribe</button>
				</div>
			</div>
		</Link>
	);
};

export default ChannelCard;
