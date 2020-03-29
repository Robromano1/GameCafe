class Api::MessagesController < ApplicationController

	
	
	def index 
		@messages = Message.all 
		render :index
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
