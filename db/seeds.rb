# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

rob = User.create!(email: "rob@rob.com", username: "RobbyBizz", password: "codelife", image_url: "true")
bond = User.create!(email: "bond@JamesBond.com", username: "bond007", password: "Goldeneye", image_url: "true")

coffee_lovers = Server.create!(server_name: "Coffee", server_image: "true", description: "The best server for coffee lovers", private: true, admin_id: rob.id)

coffee_channel = Channel.create!(channel_name: "Coffee Channel", description: "This is a channel for coffee lovers",  server_id: coffee_lovers.id)

members = ServerUser.create!(user_id: rob.id, server_id: coffee_lovers.id)
members = ServerUser.create!(user_id: bond.id, server_id: coffee_lovers.id)