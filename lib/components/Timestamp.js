import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.Component {
  
  static timeDisplay(timestamp) {
    return timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  }

  render() {
    return (
      <div>
        {`Local time: ${this.props.timestamp}`}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestamp: Timestamp.timeDisplay(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(Timestamp);