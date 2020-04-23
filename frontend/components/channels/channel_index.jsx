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
    this.selected = this.selected.bind(this);
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

  componentDidMount() {
    setTimeout(() => {
      let channelList = document.getElementsByClassName('channelList');
      channelList[0].classList.add("currentCh")
    }, 300);
  }

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

  selected() {
    setTimeout(() => {
      let channelList = document.getElementsByClassName('channelList');
      Object.values(channelList).map(channel => {
        if (!channel.classList.contains("currentCh") && parseInt(channel.id) === parseInt(this.props.location.pathname.split("/")[3])) {
          channel.classList.add("currentCh");
        } else {
          channel.classList.remove('currentCh');
        }
      })
    }, 300);
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
            <ul className="channelHeaderNavRight">
              <li className="navListItem menuListItem socialmediaListItem">
                <a className="rightNavLink-sub navLink" href="https://www.linkedin.com/in/robert-romano/" target="_blank" rel="me">
                  <svg id="Bold" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" />
                    <path d="m.396 7.977h4.976v16.023h-4.976z" />
                    <path
                      d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" />
                  </svg>
                </a>
              </li>
              <li className="navListItem menuListItem socialmediaListItem">
                <a className="rightNavLink-sub navLink" href="https://github.com/Robromano1" target="_blank" rel="me">
                  <svg viewBox="0 0 128 128">
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z">
                    </path>
                    <path
                      d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0">
                    </path>
                  </svg>
                </a>
              </li>
              <li className="navListItem menuListItem socialmediaListItem">
                <a className="rightNavLink-sub navLink" href="https://angel.co/rob_romano?public_profile=1" target="_blank" rel="me">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                      d="M8.5,36.3c1,3,4.1,6.3,7.2,7.5c2.4,1,5,1.4,7.6,1.1c2-0.2,3.8-0.7,5.4-1.5c3.3-1.7,5.6-4.3,7-7.9c0.6-1.6,1-3.4,1.1-5.5c0.1-1.6,0.1-3-0.2-4.3c-0.2-0.9-0.4-1.6-0.8-2.2c-0.5-0.7-1.3-1.2-2.6-1.6l-1.7-0.5l1.3-3.7c0.7-1.9,1.3-3.8,1.9-5.7c0.5-1.5,1-3.2,1.2-4.9c0.1-1.1-0.1-1.9-0.6-2.6c-0.4-0.4-0.9-0.7-1.5-0.8c-0.5,0-0.9,0.1-1.3,0.5c-0.2,0.2-0.4,0.4-0.6,0.6c-1.1,1.4-1.9,2.9-2.5,4.2c-1,2-1.8,4.3-2.8,7.2c-0.1,0.5-0.3,0.9-0.5,1.3l-0.7,1.9l-1.1-0.9c-0.3-0.2-0.4-0.5-0.5-0.7l-0.6-1.9c-1-2.8-2-5.8-3.3-8.5c-0.6-1.2-1.3-2.5-2.2-3.7c-0.4-0.6-0.7-0.8-1.1-0.9c-0.8-0.2-1.9,0.1-2.4,1.3C14.1,5.2,14,6,14.2,6.9c0.3,1.5,0.6,2.7,1,3.8c0.7,2.2,1.4,4.4,2.2,6.6l2,6.1l-2.7-1.7c-0.4-0.3-0.9-0.4-1.3-0.4c-0.1,0-0.2,0-0.2,0c-0.9,0.1-1.7,0.5-2.5,1.4c-0.8,0.9-0.9,1.7-0.5,2.8l1,2.5l-2,0.6c-1.7,0.5-2.7,1.6-2.9,3.3C7.9,33.3,8,34.7,8.5,36.3z" />
                    <path fill="#455A64"
                      d="M11.7,27.5c-0.2-0.5-0.4-1-0.6-1.5c-0.5-1.4-0.3-2.7,0.7-3.8c0.8-0.9,1.8-1.6,3.1-1.7c0.8-0.1,1.5,0.1,2.1,0.5c0.1,0.1,0.2,0.1,0.4,0.2c-0.1-0.3-0.2-0.5-0.3-0.8c-1-3.1-2.1-6.2-3.1-9.3c-0.4-1.3-0.7-2.6-1-3.9C13,6,13.1,4.9,13.5,3.9c0.8-1.7,2.3-2.1,3.5-1.9c0.8,0.2,1.3,0.7,1.7,1.3c0.9,1.2,1.6,2.5,2.3,3.9c1.4,2.8,2.4,5.8,3.4,8.8c0.2,0.6,0.4,1.1,0.6,1.7c0,0.1,0.1,0.1,0.2,0.2c0.2-0.6,0.5-1.2,0.7-1.9c0.8-2.5,1.7-5,2.9-7.3c0.7-1.5,1.5-3.1,2.6-4.4C31.5,4,31.8,3.8,32,3.6c1.4-1.3,3.3-0.9,4.2,0.3c0.8,1,1,2.1,0.9,3.3c-0.2,1.7-0.7,3.4-1.2,5.1C35,15,34,17.7,33.1,20.4c0,0.1-0.1,0.2-0.1,0.3c0.2,0.1,0.4,0.1,0.6,0.2c1.2,0.4,2.4,0.9,3.1,2c0.5,0.8,0.8,1.7,1,2.6c0.3,1.5,0.3,3,0.2,4.5c-0.1,2-0.5,4-1.2,5.8c-1.5,3.7-3.9,6.6-7.5,8.4c-1.8,0.9-3.8,1.5-5.8,1.6c-2.8,0.3-5.5-0.1-8.1-1.2c-3.4-1.4-6.8-4.9-7.8-8.1c-0.5-1.6-0.7-3.1-0.5-4.8c0.3-2.1,1.6-3.5,3.6-4.1C11,27.6,11.4,27.6,11.7,27.5z M11.2,33.1c0.1,0.2,0.3,0.3,0.4,0.5c0.5,0.6,0.9,1.2,1.4,1.8c0.6,0.7,1.2,1.4,2,1.7c0.7,0.3,1.3,0.3,2,0c0.6-0.3,0.7-0.7,0.6-1.3c-0.1-0.2-0.2-0.4-0.3-0.6c-0.7-1.4-1.6-2.7-2.7-3.8c-0.6-0.6-1.1-1.2-1.8-1.7c-0.6-0.5-1.2-0.5-1.8-0.1c-0.9,0.6-1.5,1.4-1.8,2.5c-0.3,1.1-0.1,2.2,0.3,3.2c1,2.7,2.7,4.9,5.1,6.4c3.6,2.3,7.5,2.8,11.5,1.5c4.6-1.5,7.5-4.8,9.1-9.3c0.7-1.9,0.8-4,0.8-6c0-1-0.1-2-0.4-2.9c-0.3-0.8-0.8-1.5-1.6-1.9c-0.5-0.2-0.9-0.4-1.4-0.6c-3.1-1.1-6.3-1.4-9.5-1.7c-0.7,0-1.3,0-2,0.2c-0.5,0.2-0.9,0.5-0.9,1.1c-0.1,1.2,0.3,2.2,1.3,2.9c0.7,0.5,1.6,0.8,2.5,1c2,0.4,4.1,0.4,6.2,0.4c0.5,0,0.9,0,1.4,0.1c0.5,0.1,0.6,0.5,0.7,1c0.1,0.4-0.2,0.6-0.5,0.7c-0.6,0.3-1.1,0.5-1.7,0.7c-2.4,0.9-4.2,2.5-5.5,4.7c-0.9,1.6-1.2,3.3-0.5,5.1c0.2,0.4,0.3,0.8,0.4,1.3c0.1,0.4,0.2,0.9,0.1,1.4c-1-0.2-1.6-0.7-2.1-1.5c-0.4-0.8-0.6-1.7-0.7-2.6c-0.1-0.5-0.1-1-0.1-1.5c-0.6,0.4-1.3,0.3-2,0.2c0,0.2,0.1,0.3,0.1,0.4c0.3,1.2-0.2,2.3-1.2,3c-0.8,0.6-1.8,0.6-2.7,0.4c-1.6-0.4-2.8-1.4-3.8-2.7c-0.5-0.7-1-1.5-1.1-2.3C10.7,34,10.7,33.6,11.2,33.1z M23.2,19.2c0,0,0-0.1,0-0.1c-0.9-2.7-1.8-5.5-2.8-8.2c-0.6-1.7-1.3-3.5-2-5.2c-0.2-0.5-0.5-1-1-1.4C16.5,3.7,15.5,4,15.2,5c-0.1,0.4-0.2,0.8-0.1,1.2c0,1.2,0.3,2.3,0.7,3.4c1.2,3.3,2.3,6.6,3.5,9.9c0,0,0,0,0,0C20.5,18.7,21.9,19.2,23.2,19.2z M30.8,20.3c0-0.1,0.1-0.1,0.1-0.2c1.4-3.8,2.7-7.6,3.9-11.5c0.2-0.8,0.4-1.5,0.3-2.4c-0.1-0.8-0.6-1.2-1.2-1.3c-0.5,0-1,0.2-1.3,0.6c-0.6,0.7-1,1.5-1.3,2.3c-1.6,3.8-2.8,7.7-4.1,11.6c0,0,0,0.1,0,0.2C28.3,19.8,29.5,20,30.8,20.3z M21.7,32.3c0-0.2,0-0.4-0.1-0.6c-0.3-0.7-0.5-1.4-0.8-2.2c-0.8-1.9-1.8-3.8-3.1-5.5c-0.4-0.5-0.9-1-1.5-1.3c-1.3-0.6-3.2,0.6-3.1,2.1c0,0,0,0.1,0,0.1c0.2,0.5,0.3,1.1,0.5,1.6c1.1,2.2,2.6,4.1,4.3,5.9c0.5,0.5,1.1,1,1.8,1.3C20.7,34.1,21.7,33.4,21.7,32.3z M23.6,31.3c0.8-1.2,1.9-2,3.1-2.9c-1.6-0.1-3.1-0.3-4.5-0.8C22.6,28.8,23.1,30,23.6,31.3z" />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="serverChannels" onClick={this.selected}>
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