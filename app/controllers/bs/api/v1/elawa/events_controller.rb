class Bs::Api::V1::Elawa::EventsController < ApplicationController

  def create
    @event = Bs::Elawa::Event.new(permit_params)
    authorize @event
    res = @event.save
    if res
      render json: {data: @event}
    else
      render json: {error: t('helpers.form_error')}
    end
  end

  def index
    authorize Bs::Elawa::Event
    @events = Bs::Elawa::Event
      .all
      #.page(params[:page])
    render json: {data: @events}, include: :segments
  end

  def destroy
    @event = Bs::Elawa::Event.find(params[:id])
    authorize @event
    @event.destroy
    render json: {data: @event}
  end

private

  def permit_params
    params.require(:elawa_event).permit(
      :name
    )
  end

end
