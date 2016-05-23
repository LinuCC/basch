class Bs::Api::V1::LocationsController < Bs::Api::V1::ApplicationController

  def index
    authorize Bs::Location
    @locations = Bs::Location.all
    render_api_data(@locations)
  end

end
