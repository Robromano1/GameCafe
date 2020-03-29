json.extract! user, :id, :username, :email
json.channel_ids user.channels.pluck(:id)
json.server_ids user.servers.pluck(:id)
