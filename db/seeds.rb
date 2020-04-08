# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
#Message.destroy_all
ServerUser.destroy_all
Server.destroy_all

rob = User.create!(email: "rob@rob.com", username: "RobbyBizz", password: "codelife")
bond = User.create!(email: "bond@JamesBond.com", username: "bond007", password: "Goldeneye")
rich = User.create!(email: "rich@rich.com", username: "reech", password: "richh1")
kai = User.create!(email: "kai@kai.com", username: "kaiba", password: "kaiba1")
paul = User.create!(email: "paul@paul.com", username: "paulll", password: "paull1")
chris = User.create!(email: "chris@chris.com", username: "chrisg", password: "chris1")
demo = User.create!(email: "demo_user@demo.com", username: "demo_user", password: "coffeelife123")

coffee_lovers = Server.create!(server_name: "Coffee", server_image: "true", description: "The best server for coffee lovers", private: true, admin_id: rob.id)
gamers = Server.create!(server_name: "Gamers", server_image: "true", description: "We are gamers!", private: false, admin_id: demo.id)
app_academy = Server.create!(server_name: "App Academy", server_image: "true", description: "Best coding bootcamp", private: false, admin_id: demo.id)
codeLife = Server.create!(server_name: "Code life", server_image: "true", description: "We love coding!", private: false, admin_id: demo.id)
coffee_talk = Server.create!(server_name: "Coffee talk", server_image: "true", description: "We love all things coffee.", private: false, admin_id: demo.id)

coffee_channel = Channel.create!(channel_name: "Coffee Channel", description: "This is a channel for coffee lovers",  server_id: coffee_lovers.id)
gamer_channel = Channel.create!(channel_name: "Gamer channel", description: "This is a channel for gamers",  server_id: gamers.id)
aA_channel = Channel.create!(channel_name: "App Academy channel", description: "This is a channel for App Academy members",  server_id: app_academy.id)
coding_channel = Channel.create!(channel_name: "Coding channel", description: "This is a channel for coding lovers",  server_id: codeLife.id)
coffee_talk_channel = Channel.create!(channel_name: "Coffee talk channel", description: "This is a channel for coffee talk",  server_id: coffee_talk.id)

members = ServerUser.create!(user_id: rob.id, server_id: coffee_lovers.id)
members = ServerUser.create!(user_id: bond.id, server_id: coffee_lovers.id)
demo_member = ServerUser.create!(user_id: demo.id, server_id: gamers.id)
demo_member = ServerUser.create!(user_id: demo.id, server_id: app_academy.id)
demo_member = ServerUser.create!(user_id: demo.id, server_id: codeLife.id)
demo_member = ServerUser.create!(user_id: demo.id, server_id: coffee_talk.id)

members = ServerUser.create!(user_id: rich.id, server_id: gamers.id)
members = ServerUser.create!(user_id: kai.id, server_id: gamers.id)
members = ServerUser.create!(user_id: paul.id, server_id: gamers.id)
members = ServerUser.create!(user_id: chris.id, server_id: gamers.id)
members = ServerUser.create!(user_id: rob.id, server_id: gamers.id)


gamer_channel.messages.create!(body: 'Welcome to the gaming channel', user_id: demo.id, channel_id: gamer_channel.id)
gamer_channel.messages.create!(body: 'Thanks!', user_id: rob.id, channel_id: gamer_channel.id)
gamer_channel.messages.create!(body: 'Whatsup Kai?', user_id: rich.id, channel_id: gamer_channel.id)
gamer_channel.messages.create!(body: 'Nothing, much just playing a game', user_id: kai.id, channel_id: gamer_channel.id)
gamer_channel.messages.create!(body: 'This app is pretty cool', user_id: paul.id, channel_id: gamer_channel.id)
gamer_channel.messages.create!(body: 'Yeah it really is', user_id: chris.id, channel_id: gamer_channel.id)

coffee_talk_channel.messages.create!(body: 'Welcome to the coffee channel', user_id: demo.id, channel_id: coffee_channel.id)
coffee_talk_channel.messages.create!(body: 'Can I have a caramel cold brew?', user_id: rob.id, channel_id: coffee_channel.id)
coffee_talk_channel.messages.create!(body: "Get a caramel latte, it's better!", user_id: rich.id, channel_id: coffee_channel.id)
coffee_talk_channel.messages.create!(body: 'Yeah I like the caramel latte too!', user_id: kai.id, channel_id: coffee_channel.id)
coffee_talk_channel.messages.create!(body: "I'm not much of a coffee drinker, I like tea better", user_id: paul.id, channel_id: coffee_channel.id)
coffee_talk_channel.messages.create!(body: "Why are you in this channel Paul?", user_id: chris.id, channel_id: coffee_channel.id)

