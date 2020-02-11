# require 'rspec/rails'

# RSpec.describe User, type: :model do
#   it { should validate_presence_of(:username) }
#   it { should validate_uniqueness_of(:username) }
#   it { should validate_presence_of(:password_digest) }
#   it { should validate_presence_of(:email) }
#   it { should validate_uniqueness_of(:email) }
#   it { should validate_presence_of(:session_token) }
#   it { should validate_uniqueness_of(:session_token) }
#   it { should validate_presence_of(:image_url) }
#   it { should validate_length_of(:password).is_at_least(6) }

#   describe 'password encryption' do 
#     it 'does not save passwords to the database' do
#         User.create!(username: 'james_bond', password: '007')
#         bond = User.find_by(username: 'james_bond')
#         expect(bond.password).not_to be('007')
#     end

#     context 'it saves passwords properly' do
#         it 'encrypts the password using BCrypt' do
#             expect(BCrypt::Password).to receive(:create)
#             User.new(username: 'Robrom', password: 'password123')
#         end

#         it 'properly sets the password reader' do
#             user = User.new(username: 'Robrom', password: 'password123')
#             expect(user.password).to eq('password123')
#         end
#     end
#   end

#   subject { User.create!(username: 'Rick_Roll', password: 'password') }

#   describe 'session token' do
#     it 'assigns a session token if one is not given' do 
#         bond = User.create!(username: 'james_bond', password: '007')
#         expect(bond.session_token).not_to be_nil
#     end

#     it 'resets a session token on a user' do
#         old_session_token = subject.session_token
#         new_session_token = subject.reset_session_token!
#         expect(old_session_token).not_to eq(new_session_token)
#     end
#   end

#   describe 'find users by credentials' do 

#     context 'with a valid username and password' do
#         it 'should return the proper user' do 
#             rick = User.create!(username: 'rick_roll', password: 'password')
#             user = User.find_by_credentials('rick_roll', 'password')
#             expect(rick.username).to eq(user.username)
#             expect(rick.password_digest).to eq(user.password_digest)
#         end
#     end

#     context 'with an invalid username and password' do 
#         it 'should return nil' do 
#             rick = User.create!(username: 'rick_roll', password: 'password')
#             user = User.find_by_credentials('rick_roll', 'notthepassword')
#             expect(user).to be_nil
#         end
#     end
#   end


# end