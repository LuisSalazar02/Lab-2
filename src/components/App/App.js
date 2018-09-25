import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../Layout";
import Home from "../../pages/Home";
import ArtistInfo from "../../pages/ArtistInfo";
import AlbumInfo from "../../pages/AlbumInfo";
import Playlist from "../../pages/PlayList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/artists/:artistId" component={ArtistInfo} />
            <Route exact path="/albums/:albumId" component={AlbumInfo} />
            <Route exact path="/playlists/:playlistId" component={Playlist} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
