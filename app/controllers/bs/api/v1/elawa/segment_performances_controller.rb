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

  def update
    @performance = Bs::Elawa::SegmentPerformance.find(params[:id])
    authorize @performance
    if @performance.update!(permit_params)
      render_api_data(@performance, include: [:performer, :location])
    else
      render_api_error('Could not update')
    end
  end

  def destroy
    @performance = Bs::Elawa::SegmentPerformance.find(params[:id])
    authorize @performance
    res = @performance.destroy
    if res
      render_api_data(@performance)
    else
      render_api_error(t('helpers.form_error'))
    end
  end

private

  def permit_params
    params.require(:elawa_segment_performance).permit(
      :performer_id, :segment_id, :location_id
    )
  end

end
