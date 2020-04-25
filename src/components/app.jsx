import React, { Component } from 'react';
import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="BNa62aHhxKuKmSQMla"/>
          </div>
        </div>
        <div className="right-scene"></div>
          <GifList />
      </div>
    );
  }
}

export default App;
