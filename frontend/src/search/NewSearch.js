import React, { useState } from "react";
import SearchForm from "../common/SearchForm";

function NewSearch({externalAPICall, dislikeIds}) {
    
    return(
        <div>
            <p>Get your new look!!</p>
            <p>Fill out the form below to search for videos.</p>
            <SearchForm externalAPICall={externalAPICall} dislikeIds={dislikeIds} />
        </div>
    )
}

export default NewSearch;