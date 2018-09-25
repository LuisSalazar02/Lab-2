import React, { Component } from "react";

import { PLAYLIST_ID } from "../../constants";

class AlbumInfo extends Component {
  state = {
    loading: true,
    error: null,
    album: null
  };

  componentDidMount() {
    this.loadAlbum();
  }

  loadAlbum = () => {
    console.log(this.props.match.params.artistId);
    fetch(
      `https://react-api-lab.herokuapp.com/albums/${
        this.props.match.params.albumId
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ loading: false, album: data });
      })
      .catch(error => {
        this.setState({ loading: false, error: error });
      });
  };

  handleClick = track => {
    fetch(`https://react-api-lab.herokuapp.com/playlists/${PLAYLIST_ID}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        track: track
      })
    });
  };

  render() {
    const { loading, error, album } = this.state;
    return (
      <div>
        {loading && <span>🔄</span>}

        {!loading &&
          album && (
            <div>
              <img src={album.data.imageUrl} alt="" className="images" />
              <h1>{album.data.name}</h1>
              <div className="tracks">
                <h1>Tracks:</h1>
                {album.data.tracks.map(track => (
                  <div key={track.id}>
                    <span>{track.trackNumber}</span>
                    <span>{track.name}</span>
                    <button onClick={() => this.handleClick(track)}>
                      Save to playlist
                    </button>
                    <p>{track.durationInSeconds}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        {error && <p>{error.messsage}</p>}
      </div>
    );
  }
}

export default AlbumInfo;
