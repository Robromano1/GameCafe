 class Server < ApplicationRecord
	validates :server_name, :description, :server_image, presence: true

	belongs_to :user, 
		primary_key: :id,
		foreign_key: :admin_id,
		class_name: :User

	has_many :channels,
		primary_key: :id,
		foreign_key: :server_id,
		class_name: :Channel

	has_many :messages,
		through: :channels,
		source: :messages

	has_many :server_users,
		foreign_key: :server_id

	has_many :members,
		through: :server_users,
		source: :user
end
