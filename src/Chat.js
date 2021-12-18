import React from 'react';

class Chat extends React.Component {
  componentDidMount() {
    window.location.href = "http://exataconsultoria.mysuite2.com.br/client/chatan.php?h=&inf=&lfa=";
  }

  render() {
    return (
      <div>
        <h2>Chat</h2>
      </div>
    )
  }
}

export default Chat;