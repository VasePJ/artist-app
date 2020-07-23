
import React, {Component} from 'react';
import BrowseArtists from './BrowseArtists';
import {Link} from 'react-router-dom';
import artists from './db.js';


class Browse extends Component{
    state ={
        artists:artists
    }
    render(){
        const {artists} = this.state;
        return(
            <div div className ="Browse">
                <h2>Browse this artists</h2>
                {artists.map((artist,i) => {
                    const style = {
                        backgroundImage: `url("/images/covers/${artist.cover}.jpg")`
                    }
                    return (<Link to={`/ArtistsPage/${artist.id}`} key={i}><BrowseArtists name={artist.name} style={style} key={artist.id} /></Link> )}
                )
                }
            </div>
        );
    }

}
export default Browse;