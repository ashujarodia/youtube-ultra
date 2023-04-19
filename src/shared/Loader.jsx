import React, { useContext, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { Context } from "../context/contextApi";

const Loader = () => {
	const { loading, setLoading } = useContext(Context);

	return (
		<LoadingBar
			color="red"
			progress={loading}
			height={3}
			loaderSpeed={1000}
			waitingTime={1000}
			// onLoaderFinished={() => setLoading(0)}
		/>
	);
};

export default Loader;
