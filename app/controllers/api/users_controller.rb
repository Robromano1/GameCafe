

class Api::UsersController < ApplicationController
    def index
        @users = User.includes(:servers, :channels).all
        render :index
    end

    def create 
        if user_params[:email] == "" && user_params[:username] == "" && user_params[:password] == ""
            render json: ["This field is required", "This field is required", "This field is required"], status: 400
        else 

            @user = User.new(user_params)
            
            if @user.save
            
                Server.first.members << @user
                demo = User.find_by(email: 'demo_user@demo.com')
                login!(@user)
                render :show 
            else
                render json: @user.errors.full_messages, status: 422
            end
        end
    end

    def show
        @user = User.find(params[:id]).includes(:servers, :channels)
        render :show
    end

    def update
        @user = selected_user
        if @user 
            @user.update_attributes(user_params)
            render :show
        elsif !@user 
            render ["User does not exist"]
        else
            render @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params 
        params.require(:user).permit(:email, :username, :password)
    end

    def selected_user
        User.find(params[:id])
    end
end
