class Bs::Backend::LocationsController < Bs::BackendController

  before_action :locations_pagecontext
  before_action :find_location, only: [:show, :edit, :update, :destroy]

  def new
    authorize Bs::Location
    pagecontext(t('backend.pages.locations.new.title'))
    @location = Bs::Location.new
  end

  def create
    authorize Bs::Location
    @location = Bs::Location.new(permit_params)
    res = @location.save
    if res
      flash[:notice] = t('helpers.done.create', model: model_human)
      redirect_to backend_locations_path
    else
      flash[:notice] = t('helpers.form_error')
      render :new, location: @location
    end
  end

  def index
    authorize Bs::Location
    @locations = Bs::Location.page(params[:page])
    respond_to do |format|
      format.html { render }
      format.json { render json: @locations }
    end
  end

  def show
    authorize @location
    respond_to do |format|
      format.json { render json: @location }
    end
  end

  def edit
    authorize @location
  end

  def update
    authorize @location
    res = @location.update!(permit_params)
    if res
      flash[:notice] = t('helpers.done.update', model: model_human)
      redirect_to backend_locations_path
    else
      flash[:notice] = t('helpers.form_error')
      render :edit, location: @location
    end
  end

  def destroy
    authorize @location
    res = @location.destroy
    if res
      flash[:notice] = t('helpers.done.destroy', model: model_human)
    else
      flash[:notice] = t('helpers.form_error')
    end
    redirect_to backend_locations_path
  end

private

  def locations_pagecontext
    pagecontext(t('backend.pages.locations.title'), link: backend_locations_path)
  end

  def permit_params
    params.require(:location).permit(:name)
  end

  def find_location
    @location = Bs::Location.find(params[:id])
  end

end
