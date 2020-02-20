json.extract! user, :id, :username, :email
json.channel_ids user.channels.pluck(:id)
