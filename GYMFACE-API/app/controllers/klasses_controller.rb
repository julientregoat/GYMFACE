class KlassesController < ApplicationController

  def index
    @klasses = Klass.all
    render json: @klasses, status: 200
  end


end
 
