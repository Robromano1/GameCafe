import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link } from 'react-router-dom';
import ChatRoomContainer from '../chat/chat_room_container';
import { withRouter } from 'react-router-dom';
import ServerShowContainer from './server_show_contianer';
import ServerFormContainer from './server_form_container';
import ChannelShowContainer from '../channels/channel_show_container';


class ServerIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.selected = this.selected.bind(this);
    this.openDelete = this.openDelete.bind(this);
    this.closeDelete = this.closeDelete.bind(this);
    // this.clsoeModal = this.clsoeModal.bind(this);
    //this.openModal = this.openModal.bind(this);
    // this.modal = this.modal.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      this.props.clearUser(),
      this.props.history.push("/");
    });
  }

  openModal(e) {
    e.stopPropagation();
    const modal = document.getElementById("serverModal");
    modal.style.display = "block";
    // e.stopPropagation();

    // const modalNode = document.getElementsByClassName('modal')[0];
    // if (!modalNode.classList.contains('openModal')) {
    //   modalNode.classList.add('openModal')
    // } else {
    //   modalNode.classList.remove('openModal')
    // }
  }

  closeModal(e) {
    e.stopPropagation();
    // e.preventDefault();
    const modal = document.getElementById("serverModal");

    modal.style.display = "none";

    // e.stopPropagation();

    // const modalNode = document.getElementsByClassName('modal')[0];
    // if (!modalNode.classList.contains('closeModal')) {
    //   modalNode.classList.add('closeModal')
    // } else {
    //   modalNode.classList.remove('closeModal')
    // }
  }

  openDelete(e) {
    e.stopPropagation();
    const deleteModal = document.getElementById("deleteModal");
    deleteModal.style.display = "block";
  }

  closeDelete(e) {
    if (e) {
      e.stopPropagation();
    }

    const deleteModal = document.getElementById("deleteModal");
    deleteModal.style.display = "none";
  }

  // toggleServerModal(e) {
  //   e.stopPropagation();

  //   const modalNode = document.getElementsByClassName('modalWrapper')[0];

  //   if (!modalNode.classList.contains('modal-content')) {
  //     modalNode.classList.add('modal-content')
  //   } else {
  //     modalNode.classList.remove('modal-content')
  //   }
  // }

  // openModal() {
  //   const modal = document.getElementById("serverModal");
  //   modal.style.display = "block";
  // }

  // closeModal() {
  //   const modal = document.getElementById("serverModal");
  //   modal.style.display = "none";
  // }

  // openModal() {
  //   const modal = document.getElementById("serverModal");
  //   modal.style.display = "block";
  // }

  selected() {
    setTimeout(() => {
      let serverList = document.getElementsByClassName('serverLink');
      Object.values(serverList).map(server => {
        if (!server.classList.contains("selected") && parseInt(server.id) === this.props.currentServer.id) {
          server.classList.add("selected");
        } else {
          server.classList.remove('selected');
        }
      })
    }, 300);
  }

  render() {
    let { servers } = this.props;
    let userServers = [];
    const serverId = parseInt(this.props.location.pathname.split('/')[2]);
    
    servers.map((serv) => {
      userServers.push(
        <Link key={serv.id} id={serv.id} to={`/channels/${serv.id}/${serv.channel_ids[0]}`} className="serverLink">
          <li className="serverLis">
              <span id="serverList">{`${serv.server_name[0]}`}</span>
          </li>
        </Link>
      );
    });
    
    return (
      <>
        <div className="scrollWrap scrollTheme">
          <div className="scroll serverPad scroll2">
            <div className="listItem">
              <div className="pill-1 pillWrapper">
                <span className="item-2"></span>
              </div>
              <div className="listItemWrapper">
                <div className="logoWrapper">
                  <img
                    className="svg-1"
                    src="https://image.flaticon.com/icons/svg/1385/1385594.svg"
                  />
                </div>
              </div>
            </div>
            <div className="listItem">
              <div className="serverSeperator"></div>
            </div>
            <div className="listItem">
              <div className="pill-2 pillWrapper">
                <span className="item-2b"></span>
              </div>
              <div className="iconContainer" draggable="true">
                <div className="iconWrapper">
                  <ul className="userServers" onMouseUp={this.selected}>{userServers}</ul>
                </div>
              </div>
            </div>
            <div className="logoutContainer">
              <div className="listItem addServer" onClick={this.openModal}>
                +
              </div>
              <button
                className="logoutButton"
                type="submit"
                onClick={this.handleLogout}
              >
                Logout
              </button>
            </div>
            <div className="deleteContainer" onClick={this.openDelete}>
              Delete Server
            </div>
          </div>
        </div>

        <ServerFormContainer />
        <ServerShowContainer />
      </>
    );
  }
}

export default withRouter(ServerIndex);
				