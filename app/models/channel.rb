class Channel < ApplicationRecord
	validates :channel_name, :description, presence: true

	belongs_to :server,
		primary_key: :id,
		foreign_key: :server_id,
		class_name: :Server

	has_many :messages,
		primary_key: :id,
		foreign_key: :channel_id,
		class_name: :Message
end
