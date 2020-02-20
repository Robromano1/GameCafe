class Api::MessagesController < ApplicationController

	before_action :ensure_logged_in
	
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
			ChatChannel.send_data("chat_#{@message.channel_id}", @message.as_json)
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
		params.require(:message).permit(:body, :user_id, :server_id)
	end
end
