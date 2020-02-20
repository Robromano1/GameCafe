class Api::ServersController < ApplicationController


	
	def index 
		#Need to show servers for current user
		@servers = Server.all 
		render :index
	end

	def show
		#Show a specific server for current user
		@server = Server.find(params[:id])
		render :show
	end

	def create
		@server = Server.new(server_params)
		if @server.save 
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
		if current_id 
			server = Server.find_by(admin_id: params[:admin_id])
			if server 
				server.destroy 
				return
			else
				render json: ["Server not found"], status: 404
			end
		else	
				render json: ["You are not the admin"], status: 401
		end
	end

	# a server has channels
	def channels
		@channels = Channel.where(server_id: params[:id]).to_a
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
