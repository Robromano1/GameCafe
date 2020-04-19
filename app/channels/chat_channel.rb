class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    # stream_for 'chat_channel'
   
    @chat_channel = Channel.find(params[:id].to_i) 
    
    stream_for @chat_channel
  end

  def speak(data)
    
    #message = Message.create({body: data['message'], user_id: 1, channel_id: 1})
    #Action cable only allows broadcast of objects, not strings
    message = @chat_channel.messages.new(body: data['message'])
    message.user_id = current_user.id
    
    if message.save! 
      msg = {
        body: message.body, 
        user_id: message.user_id, 
        channel_id: message.channel_id,
        user: { username: current_user.username },
        created_at: message.created_at
      }
      socket = { message: msg.to_json, type: 'message'}
      ChatChannel.broadcast_to(@chat_channel, socket)
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end


