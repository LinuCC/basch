class Bs::Api::V1::Elawa::SegmentPerformancesController <
  Bs::Api::V1::ApplicationController

  def create
    @performance = Bs::Elawa::SegmentPerformance.new(permit_params)
    authorize @performance
    res = @performance.save
    if res
      render_api_data(@performance)
    else
      render_api_error(t('helpers.form_error'))
    end
  end

private

  def permit_params
    params.require(:elawa_segment_performance).permit(
      :performer_id, :segment_id
    )
  end

end
