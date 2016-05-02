class Bs::Api::V1::Elawa::SegmentsController <
  Bs::Api::V1::ApplicationController

  def create
    @segment = Bs::Elawa::Segment.new(permit_params)
    authorize @segment
    res = @segment.save
    if res
      render_api_data(@segment)
    else
      render_api_error(t('helpers.form_error'))
    end
  end

  def update
    @segment = Bs::Elawa::Segment.find(params[:id])
    authorize @segment
    res = @segment.update!(permit_params)
    if res
      render_api_data(@segment)
    else
      render_api_error('NOOOOIN')
    end
  end

private

  def permit_params
    params.require(:elawa_segment).permit(
      :name, :start_date, :end_date, :event_id
    )
  end

end
