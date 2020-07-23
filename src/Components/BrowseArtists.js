import React from 'react';

const BrowseArtists = (props)=>{
    return(
        <div className="BrowseArtists" style={props.style}>
            <p>{props.name}</p>
        </div>
    )

}
export default BrowseArtists;