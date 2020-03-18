class ServerUser < ApplicationRecord

	validates :server_id, :user_id, presence: true
	validates_uniqueness_of :user_id, :scope => [:server_id]

	belongs_to :server, 
		primary_key: :id,
		foreign_key: :server_id,
		class_name: :Server

	belongs_to :user,
		primary_key: :id,
		foreign_key: :user_id,
		class_name: :User
end
