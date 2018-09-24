import React, { Component } from "react";

import { PLAYLIST_ID } from "../../constants";

class Playlist extends Component {
  state = {
    loading: true,
    error: null,
    playlist: null
  };

  componentDidMount() {
    this.loadPlaylist();
  }

  loadPlaylist = () => {
    fetch(`https://react-api-lab.herokuapp.com/playlists/${PLAYLIST_ID}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          playlist: data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };

  render() {
    const { error, loading, playlist } = this.state;
    return (
      <div>
        {loading && <span>🔄</span>}

        {!loading &&
          playlist && (
            <div>
              <ul>
                {playlist.data.map(playlist => (
                  <li>
                    <span>{playlist.track.name}</span>
                    <p>
                      by {playlist.track.album.name} from{" "}
                      {playlist.track.artist.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

export default Playlist;
