class Api::MessagesController < ApplicationController

	
	
	def index 
		if params[:channelId]
			channel_id = params[:channelId].to_i
			@messages = Channel.find(channel_id).messages.includes(:user)
		end

		if @messages 
			render :index
		else
			render json: @messages.errors.full_messages, status: 422
		end
	end

	def show
		@message = Message.find(params[:id])
		render :show
	end

	def create
		@message = Message.new(message_params)
		if @message.save 
			render :show
		else
			render json: @message.errors.full_messages, status: 402
		end
	end

	def update
		@message = Message.find(params[:id])
		if @message.update(message_params)
			render :show 
		else
			render json: @message.errors.full_messages, status: 401
		end
	end

	private 
	def message_params 
		params.require(:message).permit(:body, :user_id, :channel_id)
	end
end
