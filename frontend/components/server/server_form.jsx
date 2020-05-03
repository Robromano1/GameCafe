import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.server;

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selected = this.selected.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.createServer(this.state)
      .then(() => {
        this.closeModal()
        this.props.history.push(`/channels/${this.props.servers.slice(-1)[0].id}/${this.props.servers.slice(-1)[0].channel_ids[0]}`)
        this.selected();
      });
    this.setState({server_name: ""});
  }

  selected() {
    setTimeout(() => {
      let serverList = document.getElementsByClassName('serverLink');
      Object.values(serverList).map(server => {
        if (parseInt(server.id) === this.props.currentServer.id) {
          server.classList.add("selected");
        } else {
          server.classList.remove('selected');
        }
      })
    }, 300);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  openModal(e) {
    e.stopPropagation();
    const modal = document.getElementById("serverModal");
    modal.style.display = "block";
  }

  closeModal(e) {
    if (e) {
      e.stopPropagation();
    }
    const modal = document.getElementById("serverModal");
    
    modal.style.display = "none";
  }

  render() {
   
    return (
      <>
        <div id="serverModal" className="modal">
          <div className="modal-content">
            <form className="modalForm" onSubmit={this.handleSubmit}>
              <h5 className="serverHeader">CREATE YOUR SERVER</h5>
              <p className="serverBody">
                By Creating a server you will have access to free text chat
                amongst your friends.
              </p>
              <label>
                SERVER NAME
                <input
                  type="text"
                  className="serverName"
                  placeholder="Enter a server name"
                  value={this.state.server_name}
                  onChange={this.update("server_name")}
                />
              </label>
              <div className="formFooter">
                <span className="closeBtn" onClick={this.closeModal}>
                  BACK
                </span>
                <button type="submit" className="serverSubmitBtn">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ServerForm);