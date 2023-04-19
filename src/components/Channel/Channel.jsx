import React, { useContext, useEffect, useState } from "react";

import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../context/contextApi";
import { useParams } from "react-router-dom";
import LeftNav from "../LeftNav";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ChannelDetails from "./ChannelDetails/ChannelDetails";
import ChannelNavs from "./ChannelNavs/ChannelNavs";
import ChannelPopularVideos from "./ChannelPopularVideos/ChannelPopularVideos";

const Channel = () => {
	const [channelData, setChannelData] = useState();
	const [channelVideos, setChannelVideos] = useState();

	const { id } = useParams();
	const { setLoading } = useContext(Context);

	useEffect(() => {
		document.getElementById("root").classList.remove("custom-h");
		fetchChannelDetails();
		fetchChannelVideos();
	}, [id]);

	const fetchChannelDetails = () => {
		setLoading(30);
		fetchDataFromApi(`channel/details/?id=${id}`).then((res) => {
			// console.log(res);
			setChannelData(res);
			setLoading(100);
		});
	};

	const fetchChannelVideos = () => {
		setLoading(30);
		fetchDataFromApi(`channel/videos/?id=${id}`).then((res) => {
			// console.log(res);
			setChannelVideos(res);
			setLoading(100);
		});
	};

	return (
		<div className="flex flex-row h-[calc(100%-56px)] text-white">
			<LeftNav/>
			<div className="w-full h-full overflow-y-auto bg-black">
				<ChannelDetails channelData={channelData} />
                <ChannelNavs/>
				{channelVideos && <ChannelPopularVideos channelVideos={channelVideos}/>}
			</div>
		</div>
	);
};

export default Channel;
