class Bs::Backend::SchoolyearsController < Bs::BackendController

  before_action :auth_action
  before_action :schoolyears_pagecontext
  before_action :find_schoolyear, only: [:destroy]

  def new
    pagecontext(t('backend.pages.schoolyears.new.title'))
    @schoolyear = Bs::Schoolyear.new
  end

  def create
    @schoolyear = Bs::Schoolyear.new(permit_params)
    @schoolyear.save!
    flash[:notice] = t('helpers.done.create', model: model_human)
    redirect_to backend_schoolyears_path
  end

  def index
    @schoolyears = Bs::Schoolyear.filter_and_sort([], []).page(params[:page])
  end

  def destroy
    @schoolyear.destroy
    flash[:notice] = t('helpers.done.destroy', model: model_human)
    redirect_to backend_schoolyears_path
  end

private

  def auth_action
    authorize :backend
  end

  def schoolyears_pagecontext
    pagecontext(t('backend.pages.schoolyears.title'), link: backend_schoolyears_path)
  end

  def find_schoolyear
    @schoolyear = Bs::Schoolyear.find(params[:id])
  end

  def permit_params
    params.require(:bs_schoolyear).permit(
      :name, :status, :start_date, :end_date
    )
  end

end
