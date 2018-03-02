class UserKlassesController < ApplicationController

  def create
    newsignup = UserKlass.new(user_id: create_params[:user_id], klass_id: create_params[:klass_id])
    if newsignup.save
    else
      render json: {error: "Already have a reservation for this time."}, status: 400
    end
  end

  def destroy
  end

  private

  def create_params
    params.require(:user_klass).permit(:user_id, :klass_id)
  end

end
