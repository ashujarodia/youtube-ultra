import React from "react";
import "./ChannelNavs.scss";

const ChannelNavs = () => {
	return (
		<nav className="channel-nav">
			<div className="container">
				<ul>
					<li className="nav-item">
						<a
							href="#"
							className="current"
						>
							Home
						</a>
					</li>

					<li className="nav-item">
						<a href="#">Videos</a>
					</li>

					<li className="nav-item">
						<a href="#">Playlists</a>
					</li>

					<li className="nav-item">
						<a href="#">Community</a>
					</li>

					<li className="nav-item">
						<a href="#">Channels</a>
					</li>

					<li className="nav-item">
						<a href="#">About</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default ChannelNavs;
