import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelShowContainer from './channel_show_container';
import ServerBarContainer from '../server/server_bar_container';
import ChannelFormContainer from './channel_form_container';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    // this.openDelete = this.openDelete.bind(this);
    // this.closeDelete = this.closeDelete.bind(this);
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
    e.stopPropagation();
    const modal = document.getElementById("channelModal");
    modal.style.display = "block";
  }

  closeModal(e) {
    e.stopPropagation();
    const modal = document.getElementById("channelModal");
    modal.style.display = "none";
  }

  openDelete(e) {
    e.stopPropagation();
    const deleteModal = document.getElementById("deleteChannelModal");
    deleteModal.style.display = "block";
  }

  closeDelete(e) {
    if (e) {
      e.stopPropagation();
    }

    const deleteModal = document.getElementById("deleteChannelModal");
    deleteModal.style.display = "none";
  }

  render() {
    let { channels } = this.props;
    let serverChannels = [];

    const serverId = parseInt(this.props.match.params.serverId);
    const channelId = parseInt(this.props.match.params.channelId);

    channels.map((channel) => {
      serverChannels.push(
        <li className="channelList" key={channel.id} id={channel.id}>
          <Link
            className="channelLink"
            to={`/channels/${serverId}/${channel.id}`}
          >
            {`${channel.channel_name}`}
          </Link>
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
            <div className="newChannel" onClick={this.openModal}>
              NEW CHANNEL
            </div>
            <div className="deleteChannel" onClick={this.openDelete}>
              DELETE CHANNEL
            </div>
          </div>
          <ChannelShowContainer channelId={channelId} />
          <ChannelFormContainer serverId={serverId} />
        </div>
      </div>
    );
  }
}

export default withRouter(ChannelIndex);