class UsersController < ApplicationController

  def create
  end

  def show
    user = User.find(params[:id])
    render json: user, status: 200
  end

  def update
    user = User.find(params[:id])
    user.update(name:params[:name],username:params[:username],email:params[:email],home_club_id:params[:home_club_id])
    if user.save
      render json: {message: "Success!"}, status: 200
    else
      render json: {error: "Something went wrong with user update."}, status: 400
    end
  end

  def login
  end

  def logout
  end

end
