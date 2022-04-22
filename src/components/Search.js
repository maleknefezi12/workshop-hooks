import React from "react";

function Search({ setSearch }) {
    return (
      <>
 <input type="text" placeholder="Search Your Best Movie "  onChange={(e)=>setSearch(e.target.value)} />
         </>

        );
}

export default Search;