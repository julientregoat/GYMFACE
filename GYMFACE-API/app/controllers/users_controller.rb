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
    if params[:face_info]
      faces = params[:face_info][:FaceMatches]
      result = User.find_by(face_id: faces[0][:Face][:FaceId])
      render json: result, status: 200
    else
      user = User.find_by(username: login_params[:username])
      if user && user.authenticate(login_params[:password])
        render json: user, status: 200
      else
        render json: {error: "User does not exist or password is incorrect."}, status: 400
      end
    end
  end

  def logout
  end

  private

  def login_params
    params.require(:user).permit(:username, :password)
  end
end
