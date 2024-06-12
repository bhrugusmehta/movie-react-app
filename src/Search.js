
import React, { useState } from "react";

import "./Search.css";

function Search({ searchInput, search }) {

	return (
		<div className="search-bar">
			<input
				type="text"
				placeholder="Search Movie"
				onChange={searchInput}
			/>
			<input
				type="button"
				value="Submit"
				onClick={search}
			/>

		

		</div>
	);
}

export default Search;
