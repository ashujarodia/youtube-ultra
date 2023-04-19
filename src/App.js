import React from "react";
import { AppContext } from "./context/contextApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import Channel from "./components/Channel/Channel";

function App() {
    return (
        <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Feed />} />
                        <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
                        <Route path="/video/:id" element={<VideoDetails />} />
                        <Route path="/channel/:id" element={<Channel/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );
}

export default App;
