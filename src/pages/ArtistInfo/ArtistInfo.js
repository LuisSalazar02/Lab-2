import React, { Component } from "react";
import "./ArtistInfo.css";
import { Link } from "react-router-dom";

class ArtistInfo extends Component {
  state = {
    loading: true,
    error: null,
    artist: null
  };

  componentDidMount() {
    this.loadArtist();
  }

  loadArtist = () => {
    console.log("loadArtist");

    fetch(
      `https://react-api-lab.herokuapp.com/artists/${
        this.props.match.params.artistId
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ loading: false, artist: data });
      })
      .catch(error => {
        this.setState({ loading: false, error: error });
      });
  };

  render() {
    const { loading, artist, error } = this.state;

    return (
      <div>
        {loading && <span>🔄</span>}

        {!loading &&
          artist && (
            <div>
              <img src={artist.data.imageUrl} alt="" className="images" />
              <div className="artistInfo">
                <h1>{artist.data.name}</h1>
                <span>{artist.data.bio}</span>
              </div>
              <div className="albums">
                <h1>Albums</h1>
                {artist.data.albums.map(album => (
                  <Link to={`/albums/${album.id}`} key={album.id}>
                    <div>
                      <img src={album.imageUrl} alt="" />
                      <span>{album.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

export default ArtistInfo;
