import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";
import ChannelCard from "./ChannelCard/ChannelCard";

const SearchResult = () => {
	const navigate = useNavigate();
	const [result, setResult] = useState();
	const { searchQuery } = useParams();
	const { setLoading } = useContext(Context);

	useEffect(() => {
		document.getElementById("root").classList.remove("custom-h");
		fetchSearchResults();
	}, [searchQuery]);

	const fetchSearchResults = () => {
		setLoading(30);
		fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
			// console.log(res);
			setResult(res?.contents);
			setLoading(100);
		});
	};

	const filteredData = result?.filter((item, index, self) => index === self.findIndex((i) => i.video?.videoId === item?.video?.videoId));

	return (
		<div className="flex flex-row h-[calc(100%-56px)]">
			<LeftNav />
			<div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
				<div className="grid grid-cols-1 gap-2 p-5">
					{filteredData?.map((item) => {
						if (item.type == "channel") {

							return (
								<ChannelCard
									key={item?.channel?.channelId}
									channel={item?.channel}
								/>
							);
						}
						let video = item?.video;
						return (
							<SearchResultVideoCard
								key={video?.videoId}
								video={video}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SearchResult;
