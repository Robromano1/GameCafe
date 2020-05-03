# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Message.destroy_all
ServerUser.destroy_all
Server.destroy_all


demo = User.create!(email: "demo_user@demo.com", username: "demo_user", password: "coffeelife123")

# Avengers
spiderman = User.create!(email: "spidey@marvel.com", username: "Spiderman", password: "marvel123")
thor = User.create!(email: "thor@marvel.com", username: "Thor", password: "marvel123")
hulk = User.create!(email: "hulk@marvel.com", username: "Hulk", password: "marvel123")
iron_man = User.create!(email: "stark@marvel.com", username: "Iron-man", password: "marvel123")
captain_america = User.create!(email: "america@marvel.com", username: "Capt_America", password: "marvel123")
dr_strange = User.create!(email: "strange@marvel.com", username: "Dr_Strange", password: "marvel123")
hawkeye = User.create!(email: "hawkeye@marvel.com", username: "Hawkeye", password: "marvel123")
black_widow = User.create!(email: "widow@marvel.com", username: "Black-Widow", password: "marvel123")

marvel = Server.create!(server_name: "Marvel", server_image: "true", description: "Saving the world", private: true, admin_id: captain_america.id)

member = ServerUser.create!(user_id: spiderman.id, server_id: marvel.id)
member = ServerUser.create!(user_id: thor.id, server_id: marvel.id)
member = ServerUser.create!(user_id: hulk.id, server_id: marvel.id)
member = ServerUser.create!(user_id: iron_man.id, server_id: marvel.id)
member = ServerUser.create!(user_id: captain_america.id, server_id: marvel.id)
member = ServerUser.create!(user_id: dr_strange.id, server_id: marvel.id)
member = ServerUser.create!(user_id: hawkeye.id, server_id: marvel.id)
member = ServerUser.create!(user_id: black_widow.id, server_id: marvel.id)
demo_member = ServerUser.create!(user_id: demo.id, server_id: marvel.id)

avengers = Channel.create!(channel_name: "Avengers", description: "Superhero talk",  server_id: marvel.id)

avengers.messages.create!(body: "Whoa I love this new chat, now we can all stay in touch", user_id: spiderman.id, channel_id: avengers.id)
avengers.messages.create!(body: "It still won't allow you to be worthy of my hammer", user_id: thor.id, channel_id: avengers.id)
avengers.messages.create!(body: "HULK SMASH!!!", user_id: hulk.id, channel_id: avengers.id)
avengers.messages.create!(body: "You like it? built it myself", user_id: iron_man.id, channel_id: avengers.id)
avengers.messages.create!(body: "Calm down Hulk", user_id: captain_america.id, channel_id: avengers.id)
avengers.messages.create!(body: "So are we going to chat all day or save the world?", user_id: dr_strange.id, channel_id: avengers.id)
avengers.messages.create!(body: "Well I have target practice soon, my bow is getting rusty. Talk later.", user_id: hawkeye.id, channel_id: avengers.id)
avengers.messages.create!(body: "Cya Hawkeye, Calm down Hulk, the sun is getting low.", user_id: black_widow.id, channel_id: avengers.id)

# Star Wars
obi_wan = User.create!(email: "obi-wan@starwars.com", username: "Obi-Wan", password: "starwars123")
luke = User.create!(email: "luke@starwars.com", username: "Luke Skywalker", password: "starwars123")
yoda = User.create!(email: "yoda@starwars.com", username: "Yoda", password: "starwars123")
han = User.create!(email: "han@starwars.com", username: "Han Solo", password: "starwars123")
leia = User.create!(email: "leia@starwars.com", username: "Leia", password: "starwars123")
rey = User.create!(email: "rey@starwars.com", username: "Rey", password: "starwars123")
darth_vader = User.create!(email: "vader@starwars.com", username: "Darth Vader", password: "starwars123")
palpatine = User.create!(email: "palpatine@starwars.com", username: "Palpatine", password: "starwars123")
kylo = User.create!(email: "kylo@starwars.com", username: "Kylo Ren", password: "starwars123")

star_wars = Server.create!(server_name: "Star Wars", server_image: "true", description: "In a galaxy far far away...", private: true, admin_id: yoda.id)

member = ServerUser.create!(user_id: obi_wan.id, server_id: star_wars.id)
member = ServerUser.create!(user_id: luke.id, server_id: star_wars.id)
member = ServerUser.create!(user_id: yoda.id, server_id: star_wars.id)
member = ServerUser.create!(user_id: han.id, server_id: star_wars.id)
member = ServerUser.create!(user_id: leia.id, server_id: star_wars.id)
member = ServerUser.create!(user_id: rey.id, server_id: star_wars.id)
member = ServerUser.create!(user_id: darth_vader.id, server_id: star_wars.id)
member = ServerUser.create!(user_id: palpatine.id, server_id: star_wars.id)
member = ServerUser.create!(user_id: kylo.id, server_id: star_wars.id)
demo_member = ServerUser.create!(user_id: demo.id, server_id: star_wars.id)

jedi = Channel.create!(channel_name: "Jedi", description: "May the force be with you",  server_id: star_wars.id)
sith = Channel.create!(channel_name: "Sith", description: "We are the sith",  server_id: star_wars.id)

jedi.messages.create!(body: "Luke you're late for your training.", user_id: obi_wan.id, channel_id: jedi.id)
jedi.messages.create!(body: "Sorry Obi-Wan I'll be there in 10 minutes.", user_id: luke.id, channel_id: jedi.id)
jedi.messages.create!(body: "Train you must, defeat Vader you will.", user_id: yoda.id, channel_id: jedi.id)
jedi.messages.create!(body: "Uh oh Luke is going to be in big trouble, LOL.", user_id: han.id, channel_id: jedi.id)
jedi.messages.create!(body: "Han why are you even in this server? You're not a jedi.", user_id: luke.id, channel_id: jedi.id)
jedi.messages.create!(body: "I'm bored and yoda invited me.", user_id: han.id, channel_id: jedi.id)
jedi.messages.create!(body: "ughhhh here we go again.", user_id: leia.id, channel_id: jedi.id)
jedi.messages.create!(body: "Does anyone know who my parents are?", user_id: rey.id, channel_id: jedi.id)
sith.messages.create!(body: "So what is our plan?", user_id: darth_vader.id, channel_id: sith.id)
sith.messages.create!(body: "We must get as many Jedi as we can to turn to the dark side.", user_id: palpatine.id, channel_id: sith.id)
sith.messages.create!(body: "I can turn Rey, I know it", user_id: kylo.id, channel_id: sith.id)

# Harry Potter
harry = User.create!(email: "harry@hogwarts.com", username: "Harry Potter", password: "hogwarts123")
ron = User.create!(email: "ron@hogwarts.com", username: "Ron Weasley", password: "hogwarts123")
hermoine = User.create!(email: "hermoine@hogwarts.com", username: "Hermoine Granger", password: "hogwarts123")
draco = User.create!(email: "draco@hogwarts.com", username: "Draco Malfoy", password: "hogwarts123")
crabbe = User.create!(email: "crab@hogwarts.com", username: "Crabbe", password: "hogwarts123")
goyle = User.create!(email: "goyle@hogwarts.com", username: "Goyle", password: "hogwarts123")
dumbledore = User.create!(email: "dumbledore@hogwarts.com", username: "Prof. Dumbledore", password: "hogwarts123")
snape = User.create!(email: "snape@hogwarts.com", username: "Severus Snape", password: "hogwarts123")
mcgonagall = User.create!(email: "mcgonagall@hogwarts.com", username: "McGonagall", password: "hogwarts123")
voldemort = User.create!(email: "voldemort@hogwarts.com", username: "Voldemort", password: "hogwarts123")
lucius = User.create!(email: "lucius@hogwarts.com", username: "Lucius Malfoy", password: "hogwarts123")
bellatrix = User.create!(email: "bellatrix@hogwarts.com", username: "Bellatrix Lestrange", password: "hogwarts123")

hogwarts = Server.create!(server_name: "Hogwarts", server_image: "true", description: "School of witchcraft and wizardry", private: true, admin_id: dumbledore.id)

member = ServerUser.create!(user_id: harry.id, server_id: hogwarts.id)
member = ServerUser.create!(user_id: ron.id, server_id: hogwarts.id)
member = ServerUser.create!(user_id: hermoine.id, server_id: hogwarts.id)
member = ServerUser.create!(user_id: draco.id, server_id: hogwarts.id)
member = ServerUser.create!(user_id: crabbe.id, server_id: hogwarts.id)
member = ServerUser.create!(user_id: goyle.id, server_id: hogwarts.id)
member = ServerUser.create!(user_id: dumbledore.id, server_id: hogwarts.id)
member = ServerUser.create!(user_id: mcgonagall.id, server_id: hogwarts.id)
member = ServerUser.create!(user_id: snape.id, server_id: hogwarts.id)
member = ServerUser.create!(user_id: voldemort.id, server_id: hogwarts.id)
member = ServerUser.create!(user_id: lucius.id, server_id: hogwarts.id)
member = ServerUser.create!(user_id: bellatrix.id, server_id: hogwarts.id)
demo_member = ServerUser.create!(user_id: demo.id, server_id: hogwarts.id)

gryffindor = Channel.create!(channel_name: "Gryffindor", description: "Best house at Hogwarts",  server_id: hogwarts.id)
slytherin = Channel.create!(channel_name: "Slytherin", description: "Don't underestimate us",  server_id: hogwarts.id)
professors = Channel.create!(channel_name: "Professors", description: "Best professors at Hogwarts",  server_id: hogwarts.id)
death_eaters = Channel.create!(channel_name: "Voldemorts Army", description: "The most evil wizards in the world",  server_id: hogwarts.id)

gryffindor.messages.create!(body: "Guys I think I know what Voldemort is up to, meet me at Hagrids Hut", user_id: harry.id, channel_id: gryffindor.id)
gryffindor.messages.create!(body: "Be careful Harry, I'll meet you there now, lets go Ron!", user_id: hermoine.id, channel_id: gryffindor.id)
gryffindor.messages.create!(body: "I'll be there soon, this makes me nervous.", user_id: ron.id, channel_id: gryffindor.id)
slytherin.messages.create!(body: "Crabbe, Goyle... I saw Harry walking to Hagrids hut. He must be up to something, let's go snoop around", user_id: draco.id, channel_id: slytherin.id)
slytherin.messages.create!(body: "I'll be right over Draco, this is going to be good.", user_id: crabbe.id, channel_id: slytherin.id)
slytherin.messages.create!(body: "I'm going to get something to eat first.", user_id: goyle.id, channel_id: slytherin.id)
professors.messages.create!(body: "We need to figure out Voldemorts next move and we have to make sure Harry and the other students aren't in danger.", user_id: dumbledore.id, channel_id: professors.id)
professors.messages.create!(body: "What do you suppose we do?", user_id: mcgonagall.id, channel_id: professors.id)
professors.messages.create!(body: "Harry Potter is a fool if he thinks he'll defeat Voldemort.", user_id: snape.id, channel_id: professors.id)
death_eaters.messages.create!(body: "Harry may have gotten away once, but this time I'll make sure he doesn't", user_id: voldemort.id, channel_id: death_eaters.id)
death_eaters.messages.create!(body: "Me and my boy will help you master", user_id: lucius.id, channel_id: death_eaters.id)
death_eaters.messages.create!(body: "HAHAHAHA this is going to be fun!", user_id: bellatrix.id, channel_id: death_eaters.id)

# general 
rob = User.create!(email: "rob@rob.com", username: "RobbyBizz", password: "codelife")
rich = User.create!(email: "rich@rich.com", username: "reech", password: "richh1")
kai = User.create!(email: "kai@kai.com", username: "kaiba", password: "kaiba1")
paul = User.create!(email: "paul@paul.com", username: "paulll", password: "paull1")
chris = User.create!(email: "chris@chris.com", username: "chrisg", password: "chris1")

coffee_lovers = Server.create!(server_name: "Coffee", server_image: "true", description: "The best server for coffee lovers", private: true, admin_id: rob.id)
gamers = Server.create!(server_name: "Gamers", server_image: "true", description: "We are gamers!", private: false, admin_id: demo.id)

coffee_channel = Channel.create!(channel_name: "Coffee Channel", description: "This is a channel for coffee lovers",  server_id: coffee_lovers.id)
gamer_channel = Channel.create!(channel_name: "Gamer channel", description: "This is a channel for gamers",  server_id: gamers.id)


members = ServerUser.create!(user_id: rob.id, server_id: coffee_lovers.id)

demo_member = ServerUser.create!(user_id: demo.id, server_id: gamers.id)
demo_member = ServerUser.create!(user_id: demo.id, server_id: coffee_lovers.id)

members = ServerUser.create!(user_id: rich.id, server_id: gamers.id)
members = ServerUser.create!(user_id: kai.id, server_id: gamers.id)
members = ServerUser.create!(user_id: paul.id, server_id: gamers.id)
members = ServerUser.create!(user_id: chris.id, server_id: gamers.id)
members = ServerUser.create!(user_id: rob.id, server_id: gamers.id)

gamer_channel.messages.create!(body: 'Welcome to the gaming channel!', user_id: demo.id, channel_id: gamer_channel.id)
gamer_channel.messages.create!(body: 'Thanks!', user_id: rob.id, channel_id: gamer_channel.id)
gamer_channel.messages.create!(body: 'Whatsup Kai?', user_id: rich.id, channel_id: gamer_channel.id)
gamer_channel.messages.create!(body: 'Nothing, much just playing a game.', user_id: kai.id, channel_id: gamer_channel.id)
gamer_channel.messages.create!(body: 'This app is pretty cool.', user_id: paul.id, channel_id: gamer_channel.id)
gamer_channel.messages.create!(body: 'Yeah it really is!', user_id: chris.id, channel_id: gamer_channel.id)

coffee_channel.messages.create!(body: 'Welcome to the coffee channel!', user_id: demo.id, channel_id: coffee_channel.id)
coffee_channel.messages.create!(body: 'Can I have a caramel cold brew?', user_id: rob.id, channel_id: coffee_channel.id)
coffee_channel.messages.create!(body: "Get a caramel latte, it's better!", user_id: rich.id, channel_id: coffee_channel.id)
coffee_channel.messages.create!(body: 'Yeah I like the caramel latte too!', user_id: kai.id, channel_id: coffee_channel.id)
coffee_channel.messages.create!(body: "I'm not much of a coffee drinker, I like tea better.", user_id: paul.id, channel_id: coffee_channel.id)
coffee_channel.messages.create!(body: "Why are you in this channel Paul?", user_id: chris.id, channel_id: coffee_channel.id)