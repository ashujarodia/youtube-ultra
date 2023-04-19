import React from "react";
import "./ChannelPopularVideos.scss";
import VideoCard from "../../VideoCard";

const ChannelPopularVideos = ({ channelVideos }) => {

	return (
		<div className="channel-videos-container">
			<div className="contents">
				<div className="title">Popular Videos</div>
				<div className="videos grow w-full h-full overflow-y-auto bg-black">
					<div className="flex gap-4 w-[400px]">
						{channelVideos &&
							channelVideos?.contents.map((item) => {
								return (
									<VideoCard
										key={item?.video?.videoId}
										video={item?.video}
									/>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChannelPopularVideos;
