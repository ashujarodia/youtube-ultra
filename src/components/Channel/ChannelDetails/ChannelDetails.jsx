import React, { useState } from "react";
import "./ChannelDetails.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ChannelDetails = ({ channelData }) => {
	const [subscribed, setSubscribed] = useState(false);

	const handleSubscribe = () => {
		if (!subscribed) {
			setSubscribed(true);
		} else {
			setSubscribed(false);
		}
	};


	return (
		<div className="channel-details-container">
			<section
				className="channel-banner"
				style={{
					backgroundImage: `url(${channelData?.banner?.desktop[0]?.url})`,
				}}
			></section>
			<section className="channel-info">
				<div className="channel-details">
					<div className="channel-icon">
						<img
							src={channelData?.avatar[0]?.url}
							alt=""
						/>
					</div>

					<div className="channel-title">
						<h1 className="channel-name">
							<span>{channelData?.title}</span>
							<span>{channelData?.badges[0]?.type === "VERIFIED_CHANNEL" || "OFFICIAL_ARTIST_CHANNEL" && <BsFillCheckCircleFill className="text-white/[0.5]" />}</span>
						</h1>
						<div className="channel-id-and-subscribers">
							<div className="channel-id">{channelData?.username}</div>
							<div className="channel-subscriber-count">{channelData?.stats?.subscribersText}</div>
							<div className="videos-count">{channelData?.stats?.videosText}</div>
						</div>
						<div className="channel-desc">{channelData?.description.slice(0, 50)}</div>
					</div>
				</div>
				<div className="channel-subscribe-btn">
					<button
						className="subscribe-btn btn"
						onClick={handleSubscribe}
					>
						Subscribe{subscribed && "d"}
					</button>
				</div>
			</section>

		</div>
	);
};

export default ChannelDetails;
