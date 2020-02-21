json.extract! user, :id, :username, :email, :image_url
json.channel_ids user.channels.pluck(:id)
