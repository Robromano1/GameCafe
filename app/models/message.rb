class Message < ApplicationRecord
	validates :body, :user_id, :channel_id

	belongs_to :user,
		primary_key: :id,
		foreign_key: :user_id,
		class_name: :User

	belongs_to :channel,
		primary_key: :id,
		foreign_key: :channel_id,
		class_name: :Channel
end
