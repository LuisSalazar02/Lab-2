import React, { Component } from "react";

import { Link } from "react-router-dom";

class ArtistList extends Component {
  state = {
    loading: true,
    error: null,
    artists: null
  };

  componentDidMount() {
    this.loadList();
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      this.loadList();
    }
  }

  loadList = () => {
    console.log(this.props.search);

    this.setState({
      loading: true,
      artists: null,
      error: null
    });

    fetch(
      `https://react-api-lab.herokuapp.com/search?query=${this.props.search}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          artists: data
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
    const { loading, error, artists } = this.state;
    return (
      <div>
        {loading && <span>🔄</span>}

        {!loading &&
          artists && (
            <div>
              {artists.data.map(artist => (
                <Link to={`/artists/${artist.id}`} key={artist.id}>
                  <div>
                    <img src={artist.imageUrl} className="images" />
                    <h1>{artist.name}</h1>
                  </div>
                </Link>
              ))}
            </div>
          )}

        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

export default ArtistList;
