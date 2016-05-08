class Bs::Backend::Elawa::SegmentsController < Bs::BackendController

  def show
    @segment = Bs::Elawa::Segment.find(params[:id])
    authorize @segment
    client_rendered
  end

end
