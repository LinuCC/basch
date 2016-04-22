class Bs::Api::V1::Elawa::EventsController < ApplicationController

  def index
    authorize Bs::Elawa::Event
    @events = Bs::Elawa::Event
      .all
      #.page(params[:page])
    render json: @events, include: :segments
  end

end
