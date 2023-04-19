import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";

import { fetchDataFromApi } from "../utils/api";

const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	const { loading, mobileMenu, setMobileMenu } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		autoCompleteSuggestions();
	}, [searchQuery]);

	const searchQueryHandler = (e) => {
		if (e.keyCode === 13 || (e === "searchButton" && searchQuery?.length > 0)) {
			navigate(`/searchResult/${searchQuery}`);
		}
	};

	const autoCompleteSuggestions = (e) => {
		if (searchQuery?.length > 0) {
			fetchDataFromApi(`auto-complete/?q=${searchQuery}`).then((res) => {
				setSuggestions(res);
			});
		}
	};

	const mobileMenuToggle = () => {
		setMobileMenu(!mobileMenu);
	};

	const { pathname } = useLocation();
	const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

	return (
		<div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
			{loading && <Loader />}
			<div className="flex h-5 items-center">
				{pageName !== "video" && (
					<div
						className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
						onClick={mobileMenuToggle}
					>
						{mobileMenu ? <CgClose className="text-white text-xl" /> : <FiMenu className="text-white text-xl" />}
					</div>
				)}
				<Link
					to="/"
					className="flex h-5 items-center"
				>
					<img
						className="h-full hidden dark:md:block"
						src={ytLogo}
						alt="Youtube"
					/>
					<img
						className="h-full md:hidden"
						src={ytLogoMobile}
						alt=""
					/>
				</Link>
			</div>
			<div className="group flex items-center">
				<div className="flex h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
					<div className="w-10  items-center justify-center hidden group-focus-within:md:flex">
						<IoIosSearch className="text-white text-xl" />
					</div>
					<input
						type="text"
						className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
						onChange={(e) => setSearchQuery(e.target.value)}
						onKeyUp={searchQueryHandler}
						value={searchQuery}
						placeholder="Search"
					/>

					{searchQuery && (
						<div className="absolute hidden flex-col gap-2 py-5 px-0 mt-11 opacity-1 overflow-y-auto text-black max-h-[280px] w-auto bg-white md:w-64 lg:w-[500px] rounded-lg group-focus-within:flex">
							{suggestions?.results?.map((item, index) => {
								return (
									<Link
										className="flex gap-3 items-center justify-start hover:bg-[#303030]/[0.15] w-full px-4 cursor-default"
										key={index}
										to={`/searchResult/${item}`}
									>
										<IoIosSearch className="text-black text-lg" />
										<span> {item}</span>
									</Link>
								);
							})}
						</div>
					)}
				</div>
				<button
					onClick={searchQueryHandler}
					className="w-[40px] md:w-[60px] h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
				>
					<IoIosSearch className="text-white text-xl" />
				</button>
			</div>
			<div className="flex items-center">
				<div className="hidden md:flex">
					<div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] cursor-pointer">
						<RiVideoAddLine className="text-white text-xl" />
					</div>
					<div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] cursor-pointer">
						<FiBell className="text-white text-xl " />
					</div>
				</div>
				<div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
					<img
						src="https://xsgames.co/randomusers/assets/avatars/male/36.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
