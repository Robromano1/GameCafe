# GameCafe Overview

## Introduction
Link: <a href="https://game-cafe-project.herokuapp.com/#/">GameCafe</a>

GameCafe is a platform for people who love gaming, coffee, or just want to be apart of a community. It specializes in text communication between users, and allows them to stay connected. 

## Technologies
Database: Postgresql
<br/>
Front-end development: JavaScript ES6, React, Redux, AJAX, HTML, CSS, JQuery
<br/>
Back-end development: Ruby on Rails

## Features
The primary features of GameCafe are for users to be able to chat, join servers, and join channels. In order for users to be able to chat we need data to pass through a tcp connection. That's where action cables/websockets come into play. Find a channel by id, stream for that channel, and make sure to create messages with the correct data. 
### Live Chat
```Ruby
class ChatChannel < ApplicationCable::Channel
  def subscribed
   @chat_channel = Channel.find_by(id: params[:id])
    stream_for @chat_channel
  end
  
  def speak(data)
    message = @chat_channel.messages.new(body: data['message'])
    message.user_id = current_user.id
    
    if message.save! 
      socket = { message: message.to_json, type: 'message'}
      ChatChannel.broadcast_to(@chat_channel, socket)
    end
  end
 end
 ```
One of the challenges is how to make sure the messasges persist to the database and ensure that they are pulled from that database when the user logs in. This way the user can see prevoious messages written by other users in that channel, and also see their own previous messages. One way to do this is to connect the chat to the redux store. When this component mounts, instead of setting the local state, an action will be dispatched to receive messages. 
 ```javaScript
 class ChatRoom extends React.Component {
	constructor(props) {
		super(props);
    
    this.bottom = React.createRef();
		this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
		App.currentChannel = App.cable.subscriptions.create(
			{ channel: "ChatChannel", id: this.props.match.params.channelId },
			{ 
      received: data => {
					// Instead of setting local this.state, dispatch action to update store
					this.props.receiveMessage(JSON.parse(data.message))

				},
				speak: function(data) {
					return this.perform("speak", data);
				}
			}
		);
	}
  ```
Now when a user logs in, not only can they create new messages, but they can see previous messages from other users. This way they are always in the loop, and never miss out on the conversation.
### User Authentication
<p>Show image of user auth/error messages if wrong input is given.</p>

## Future Features
- Demo User
- Unique channel messages
- Server selection
- Modals
- User online status
- Friends list
- Message reactions

