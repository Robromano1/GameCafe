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
    // this.clsoeModal = this.clsoeModal.bind(this);
    //this.openModal = this.openModal.bind(this);
    // this.modal = this.modal.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => {
      this.props.history.push("/");
    });
  }

  openModal(e) {
    const modal = document.getElementById('serverModal')
    modal.style.display = 'block';
    // e.stopPropagation();

    // const modalNode = document.getElementsByClassName('modal')[0];
    // if (!modalNode.classList.contains('openModal')) {
    //   modalNode.classList.add('openModal')
    // } else {
    //   modalNode.classList.remove('openModal')
    // }
  };

  closeModal(e) {
    // e.preventDefault();
    const modal = document.getElementById('serverModal')
    // debugger
    modal.style.display = 'none';

    // e.stopPropagation();

    // const modalNode = document.getElementsByClassName('modal')[0];
    // if (!modalNode.classList.contains('closeModal')) {
    //   modalNode.classList.add('closeModal')
    // } else {
    //   modalNode.classList.remove('closeModal')
    // }
  }
  
  // toggleServerModal(e) {
  //   e.stopPropagation();

  //   const modalNode = document.getElementsByClassName('modalWrapper')[0];
  //   debugger
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

  render() {
    let { servers } = this.props;
    let userServers = [];

    servers.map((serv) => {
      userServers.push(
        <li key={serv.id} id={serv.id}>
          <Link to={`/channels/${serv.id}/${serv.channel_ids[0]}`}>
            {`${serv.server_name[0]}`}
          </Link>
        </li>
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
                  <ul className="userServers">{userServers}</ul>
                </div>
              </div>
            </div>
            <div className="listItem addServer" onClick={this.openModal}>+</div>
            <button
              className="logoutButton"
              type="submit"
              onClick={this.handleLogout}
              >
              Logout
            </button>
          </div>
        </div>

        <ServerFormContainer/>
        <ServerShowContainer />
      </>
    );
  }
}

export default withRouter(ServerIndex);
				