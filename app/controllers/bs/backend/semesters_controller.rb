class Bs::Backend::SemestersController < Bs::BackendController

  before_action :auth_action
  before_action :semesters_pagecontext
  before_action :find_semester, only: [:edit, :update, :destroy]

  def new
    pagecontext(t('backend.pages.semesters.new.title'))
    @semester = Bs::Semester.new
  end

  def create
    @semester = Bs::Semester.new(permit_params)
    @semester.save!
    flash[:notice] = t('helpers.done.create', model: model_human)
    redirect_to backend_semesters_path
  end

  def index
    @semesters = Bs::Semester.filter_and_sort([], []).page(params[:page])
  end

  def edit
  end

  def update
    @semester.update_attributes!(permit_params)
    flash[:notice] = t('helpers.done.update', model: model_human)
    redirect_to backend_semesters_path
  end

  def destroy
    @semester.destroy
    flash[:notice] = t('helpers.done.destroy', model: model_human)
    redirect_to backend_semesters_path
  end

private

  def auth_action
    authorize :backend
  end

  def semesters_pagecontext
    pagecontext(t('backend.pages.semesters.title'), link: backend_semesters_path)
  end

  def find_semester
    @semester = Bs::Semester.find(params[:id])
  end

  def permit_params
    params.require(:bs_semester).permit(
      :name, :status, :start_date, :end_date
    )
  end

end
