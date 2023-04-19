import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
	const [loading, setLoading] = useState(0);
	const [searchResults, setSearchResults] = useState([]);
	const [selectCategories, setSelectCategories] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(true);

	useEffect(() => {
		fetchSelectedCategoryData(selectCategories);
	}, [selectCategories]);

	const fetchSelectedCategoryData = (query) => {
		setLoading(30);
		fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
			// console.log(contents);
			setSearchResults(contents);
			setLoading(100);
		});
	};

	return (
		<Context.Provider
			value={{
				loading,
				setLoading,
				searchResults,
				setSearchResults,
				selectCategories,
				setSelectCategories,
				mobileMenu,
				setMobileMenu,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
