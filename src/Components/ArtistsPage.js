import React, {Component} from 'react';
import Albums from './Albums';
import artists from './db.js';


class ArtistsPage extends Component {
    state ={
        artists:''
    }
    componentDidMount(){
        this.setState({
            artists: artists[this.props.match.params.id - 1]
        });
    }
    render() {
		const {name,bio,cover} = this.state.artists;
		const artist_img = {
			backgroundImage: `url("/images/covers/${cover}.jpg")`
		}	
		return (
			<div className="Artistspage">				
				<div className="Artistpage">
					<div className="artist-image" style={artist_img}></div>
					<h2>{name}</h2>
					<p>{bio}</p>
				{
					this.state.artists.albums ? <Albums albums={this.state.artists.albums}/> : ''
				}
			    </div>
			</div>
		);
	}

}
export default ArtistsPage;