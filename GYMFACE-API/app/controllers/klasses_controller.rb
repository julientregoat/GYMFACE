class KlassesController < ApplicationController

  def index
    Klass.fetchKlasses(params[:location_id], params[:date])
    @klasses = Klass.all
    render json: @klasses, status: 200
  end


end
