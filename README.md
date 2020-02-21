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

## Sample features
The primary features of GameCafe are for users to be able to chat, join servers, and join channels. In order for users to be able to chat we need data to pass through a tcp connection. That's where action cables/websockets come into play. Find a channel by id, stream for that channel, and make sure to create messages with the correct data. 
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
