require 'byebug'

class Api::UsersController < ApplicationController
    def index
        @user = User.all
        render :index
    end

    def create 
        @user = User.new(user_params)
        #debugger
        if @user.save
            login!(@user)
            render :show 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
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
