class Bs::Api::V1::Elawa::EventsController < Bs::Api::V1::ApplicationController

  def create
    @event = Bs::Elawa::Event.new(permit_params)
    authorize @event
    res = @event.save
    if res
      render_api_data(@event)
    else
      render_api_error(t('helpers.form_error'))
    end
  end

  def index
    authorize Bs::Elawa::Event
    @events = Bs::Elawa::Event
      .all
      #.page(params[:page])
    render_api_data(@events, include: :segments)
  end

  def show
    @event = Bs::Elawa::Event.find(params[:id])
    authorize @event
    render_api_data(@event, include: :segments)
  end

  def update
    @event = Bs::Elawa::Event.find(params[:id])
    authorize @event
    res = @event.update!(permit_params)
    if res
      render_api_data(@event, include: :segments)
    else
      render_api_error('NOOOOIN')
    end
  end

  def destroy
    @event = Bs::Elawa::Event.find(params[:id])
    authorize @event
    @event.destroy
    render_api_data(@event)
  end

private

  def permit_params
    params.require(:elawa_event).permit(
      :name, :status
    )
  end

end
