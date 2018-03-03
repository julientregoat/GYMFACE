class KlassesController < ApplicationController

  def index
    Klass.fetchKlasses()
    @klasses = Klass.all
    render json: @klasses, status: 200
  end


end
