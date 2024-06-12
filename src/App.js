import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import "./App.css";

function App() {
    const [movie, setMovie] = useState({
        s: "Kungfu",
        results: [],
    });
    const [loading, setLoading] = useState(false); // Add loading state

    const apiurl = "https://www.omdbapi.com/?apikey=41034404";

    const searchInput = (e) => {
        let s = e.target.value;
        setMovie((prevState) => {
            return { ...prevState, s: s };
        });
    };

    const search = (e) => {
        setLoading(true); // Set loading to true when searching
        axios(apiurl + "&s=" + movie.s)
            .then(({ data }) => {
                let results = data.Search;
                setMovie((prevState) => {
                    return {
                        ...prevState,
                        results: results,
                    };
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false when search completes (whether success or failure)
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Movie app</h1>
            </header>
            <Search searchInput={searchInput} search={search} />
            <div className="container">
                {loading ? (
                    <p>Loading...</p>
                ) : movie.results && movie.results.length > 0 ? (
                    movie.results.map((e) => (
                        <div className="item" key={e.imdbID}>
                            <img style={{ width: "100px" }} src={e.Poster} alt={e.Title} />
                            <h3 style={{ color: "black" }}>{e.Title}</h3>
                        </div>
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>
        </div>
    );
}


export default App;
