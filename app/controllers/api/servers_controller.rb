class Api::ServersController < ApplicationController
	
	def index 
		@servers = Server.all
		render :index
	end

	def show
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
		@server = Server.find(params[:id])
		if @server && @server.delete
			render :index 
		end
	end

	private
	def server_params
		params.require(:server).permit(:server_name, :description, :admin_id, :server_image)
	end
end
