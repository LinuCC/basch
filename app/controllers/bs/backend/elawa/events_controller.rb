class Bs::Backend::Elawa::EventsController < Bs::BackendController

  def show
    @event = Bs::Elawa::Event.find(params[:id])
    authorize @event
    client_rendered
  end

  def index
    authorize :backend
    client_rendered
  end

end
