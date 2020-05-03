import React from 'react'
import { withRouter } from 'react-router-dom';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      channel_name: "",
      description: "default description"
      
    }
    
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.selected = this.selected.bind(this);
    
  }

  handleSubmit(e) {
    e.preventDefault();
    const serverId = parseInt(this.props.location.pathname.split("/")[2]);
    
    
    const newState = Object.assign({}, this.state)
    newState['server_id'] = serverId
		this.props.createChannel(newState)
			.then(() => {
        this.closeModal()
        this.props.history.push(`/channels/${serverId}/${this.props.channels.slice(-1)[0].id}`)
        this.selected();
      }) 
    this.setState({
      channel_name: ""
    })      
  }

  selected() {
    setTimeout(() => {
      let channelList = document.getElementsByClassName('channelList');
      Object.values(channelList).map(channel => {
        if (parseInt(channel.id) === parseInt(this.props.location.pathname.split("/")[3])) {
          channel.classList.add("currentCh");
        } else {
          channel.classList.remove('currentCh');
        }
      })
    }, 300);
  }

  openModal(e) {
    e.stopPropagation();
    const modal = document.getElementById("channelModal");
    modal.style.display = "block";
  }

  closeModal(e) {
    if (e) {
      e.stopPropagation();
    }
    const modal = document.getElementById("channelModal");
    modal.style.display = "none";
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    
    return (
      <>
        <div id="channelModal" className="channel-modal">
          <div className="ch-modal-content">
            <form className="channelModalForm" onSubmit={this.handleSubmit}>
              <h4 className="channelHeader">CREATE TEXT CHANNEL</h4>
              <label className="channelName theme-dark">
                CHANNEL NAME
                <input
                  type="text"
                  className="channelInput"
                  value={this.state.channel_name}
                  onChange={this.update("channel_name")}

                />
              </label>
              <div className="chFormFooter">
                <div className="chFormBtns">
                  <span className="chCloseBtn" onClick={this.closeModal}>
                    Cancel
                  </span>
                  <button type="submit" className="channelSubmitBtn">
                    Create Channel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ChannelForm);