class UsersController < ApplicationController

  def create
  end

  def show
    user = User.find(params[:id])
    render json: user, status: 200
  end

  def update
    
  end

  def login
  end

  def logout
  end

end
