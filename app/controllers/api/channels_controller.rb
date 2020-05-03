class Api::ChannelsController < ApplicationController

	

	def index 
		@channels = Server.find(params[:serverId]).channels
		if @channels 
			render :index
		else
			render json: @channels.errors.full_messages, status: 420
		end
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
		current_id = current_user.id
		@channel = Channel.find(params[:id])
		server = Server.find_by(id: @channel.server_id)
	
		if @channel 
			# if current_id == server.admin_id
				@channel.delete
				return 
			# else 
			# 	render json: ["You are not the admin"], status: 401
			# end
		else
			render json: ["Channel not found"], status: 404
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
