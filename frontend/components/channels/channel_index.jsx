import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelShowContainer from './channel_show_container';
import ServerBarContainer from '../server/server_bar_container';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  // 	// this.props.getUserChannels();
  // 	//this.props.getUserChannel(this.props.currentUser.id);
  // 	//<ServerBarContainer/>
  // 	const { getServerChannels } = this.props;

  // 	const serverId = this.props.match.params.serverId
  // 	if (serverId) {
  // 		getServerChannels(serverId);
  // 	}
  // }

  openModal(e) {
    const modal = document.getElementById("channelModal");
    modal.style.display = "block";
  }

  closeModal(e) {
    const modal = document.getElementById("channelModal");
    modal.style.display = "none";
  }

  render() {
    let { channels } = this.props;
    let serverChannels = [];

    channels.map((channel) => {
      serverChannels.push(
        <li className="channelList" key={channel.id} id={channel.id}>
          {`${channel.channel_name}`}
        </li>
      );
    });

    return (
      <div className="base">
        <div className="content-1">
          <div className="sidebar">
            <div className="serverChannels">
              <ul>{serverChannels}</ul>
            </div>
            <div className="listItem addServer" onClick={this.openModal}>
              +
            </div>
          </div>
          <ChannelShowContainer />z
        </div>
      </div>
    );
  }
}

export default withRouter(ChannelIndex);