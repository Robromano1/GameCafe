class Api::ChannelsController < ApplicationController

	before_action :ensure_logged_in

	def index 
		@channels = Channel.all 
		render :index
	end

	def show
		@channel = Channel.find(params[:id])
		render :show
	end

	def create
		@channel = Channel.new(channel_params)
		if @channel.save
			render :show
		else
			render json: @channel.errors.full_messages, status: 402
		end
	end

	def update
		@channel = Channel.find(params[:id])
		if @channel.update(channel_params)
			render :show 
		else
			render json: @channel.errors.full_messages, status: 401
		end
	end

	def destroy
		@channel = Channel.find(params[:id])
		if @channel && @channel.delete
			render :index 
		end
	end

	#channels have messages
	def messages 
		@messages = Message.where(channel_id: params[:id]).to_a
		if @messages
			render :index 
		else
			render json @messages.errors.full_messages
		end
	end

	private
	def channel_params
		params.require(:channel).permit(:server_id, :channel_name, :description)
	end
end
