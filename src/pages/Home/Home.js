import React, { Component } from "react";

import ArtistList from "../../components/ArtistList";

export default class Home extends Component {
  state = {
    search: null
  };
  artistNameRef = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      search: this.artistNameRef.current.value
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Artist Name"
              ref={this.artistNameRef}
            />
            <button>Search</button>
          </form>
        </div>
        <div>{search && <ArtistList search={search} />}</div>
      </div>
    );
  }
}
