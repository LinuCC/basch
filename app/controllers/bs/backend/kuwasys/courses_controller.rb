class Bs::Backend::Kuwasys::CoursesController < Bs::Backend::Kuwasys::DashboardController

  before_action :auth_action
  before_action :courses_pagecontext
  before_action :find_course, only: [:edit, :update, :destroy]

  def new
    pagecontext(t('backend.pages.kuwasys.courses.new.title'))
    @course = Bs::Kuwasys::Course.new
  end

  def create
    @course = Bs::Kuwasys::Course.new(permit_params)
    @course.save!
    flash[:notice] = t('helpers.done.create', model: model_human)
    redirect_to backend_kuwasys_courses_path
  end

  def index
    @courses = Bs::Kuwasys::Course.all.page(params[:page])
  end

  def edit
    pagecontext(t('backend.pages.kuwasys.courses.edit.title'))
  end

  def update
    @course.performer_ids = ["1"]
    @course.update_attributes!(permit_params)
    flash[:notice] = t('helpers.done.update', model: model_human)
    redirect_to backend_kuwasys_courses_path
  end

  def destroy
    @course.destroy
    flash[:notice] = t('helpers.done.destroy', model: model_human)
    redirect_to backend_kuwasys_courses_path
  end

private

  def find_course
    @course = Bs::Kuwasys::Course.find(params[:id])
  end

  def permit_params
    params.require(:bs_kuwasys_course).permit(
      :name, :description, :start_date, :end_date, :event_status,
      performer_ids: []
    )
  end

  def courses_pagecontext
    pagecontext(
      t('backend.pages.kuwasys.courses.title'),
      link: backend_kuwasys_courses_path
    )
  end

end
