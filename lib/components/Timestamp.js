import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.Component {
  
  timeDisplay(timestamp) {
    return timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  }

  shouldComponentUpdate(nextProps) {
    const currentTimeDisplay = this.timeDisplay(this.props.timestamp);
    const nextTimeDisplay = this.timeDisplay(nextProps.timestamp);
    return currentTimeDisplay !== nextTimeDisplay;
  }

  render() {
    return (
      <div>
        {`Local time: ${this.timeDisplay(this.props.timestamp)}`}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(Timestamp);