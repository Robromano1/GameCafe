class Api::ServersController < ApplicationController


	
	def index 
		 
		if params[:userId]
			
			user_id = params[:userId].to_i
			
			@servers = User.find(user_id).servers.all
			if @servers 
				
				render :index 
			else
				render json: @servers.errors.full_messages, status: 422
			end
		else
			@servers = Server.where(:servers => { :private => false})
			if @servers
				render :index 
			else
				render json: @servers.errors.full_messages, status: 422
			end
		end
	end

	def show
		@server = Server.find(params[:id])
		
		if @server
			render :show
		else
			render json: @server.errors.full_messages, status: 422
		end
	end

	def create
		@server = Server.new(server_params)

		@server.admin_id = current_user.id 

		if @server.save 
			@server.members << current_user
			
			@server.channels << Channel.new({channel_name: 'general', server_id: @server.id, description: 'general channel'})
			render :show 
		else
			render json: @server.errors.full_messages, status: 422
		end
	end

	def update
		@server = Server.find(params[:id])
		if @server.update(server_params)
			render :show 
		else
			render json: @server.error.full_messages, status: 401 
		end
	end

	def destroy
		current_id = current_user.id 
		@server = Server.find(params[:id])
	
		if @server 
			if current_id == @server.admin_id
				@server.destroy 
				return
			else
				render json: ["You are not the admin"], status: 401
			end
		else	
				render json: ["Server not found"], status: 404
		end
	end

	# a server has channels
	def channels
		@channels = Channel.where(server_id: params[:id])&.to_a
		if @channels
			render :index
		else
			render json: @channels.errors.full_messages
		end
	end

	private
	def server_params
		params.require(:server).permit(:server_name, :description, :admin_id, :server_image)
	end
end
