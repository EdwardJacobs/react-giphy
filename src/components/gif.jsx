import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  handleClick = () => {
    const { selectGif } = this.props;
    const { id } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  }

  render() {
    if (!this.props.id) {
      return null;
    }

    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
