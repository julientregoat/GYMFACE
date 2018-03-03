class KlassesController < ApplicationController

  def index
    Klass.fetchKlasses()
    @klasses = Klass.class_by_date
    render json: @klasses, status: 200
  end


end
