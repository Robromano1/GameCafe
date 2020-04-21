import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChatRoomContainer from '../chat/chat_room_container';
import ServerShowContainer from '../server/server_show_contianer';
import { getChannel } from '../../util/channel_api_util';
import App from '../app';
import Modal from '../server/server_form_container';
import BridgeContainer from '../bridge_container';

class ChannelShow extends React.Component {
  constructor(props) {
		super(props);
		
		this.deleteChannel = this.deleteChannel.bind(this);
  }

  componentDidMount() {
    const { getChannel, fetchChannelMessages } = this.props;
    const channelId = parseInt(this.props.match.params.channelId);

    if (channelId) {
      getChannel(channelId).then(() => fetchChannelMessages(channelId));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.channelId != this.props.match.params.channelId) {
      const { getChannel, fetchChannelMessages } = this.props;
      const channelId = parseInt(this.props.match.params.channelId);

      if (channelId) {
        getChannel(channelId).then(() => fetchChannelMessages(channelId));
      }
    }
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

  deleteChannel() {
		
    const channelId = parseInt(this.props.location.pathname.split("/")[3]);
    const serverId = parseInt(this.props.location.pathname.split("/")[2]);
    // debugger
    this.props.deleteChannel(channelId).then(() => {
			this.closeDelete(), 
        this.props.history.push(`/channels/${serverId}/${this.props.channels.slice(-1)[0].id}`);
    });
  }

  render() {
    return (
      <>
        <div id="deleteChannelModal" className="delete-channel-modal">
          <div className="deleteChannelModalContent">
            <h4 className="deleteChannelHeader">DELETE CHANNEL</h4>
            <div className="deleteChannelBody">
              Are you sure you want to delete this channel? This cannot be
              undone.
            </div>
            <div className="deleteChannelModalFooter">
              <div className="deleteChannelModalBtns">
                <span className="deleteChannelCloseBtn" onClick={this.closeDelete}>
                  Cancel
                </span>
                <button
                  type="submit"
                  className="deleteChannelBtn"
                  onClick={this.deleteChannel}
                >
                  Delete Channel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="chatRoom">
            <div className="chatroom-container">
              <ChatRoomContainer channelId={this.props.channelId} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ChannelShow);