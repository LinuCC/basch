  class Bs::Backend::GradesController < Bs::BackendController

  before_action :auth_action
  before_action :grades_pagecontext
  before_action :find_grade, only: [:edit, :show, :update, :destroy]

  def new
    pagecontext(t('backend.pages.grades.new.title'))
    @grade = Bs::Grade.new
  end

  def create
    @grade = Bs::Grade.new(permit_params)
    res = @grade.save
    if res
      flash[:notice] = t('helpers.done.create', model: model_human)
      redirect_to backend_grades_path
    else
      flash[:notice] = t('helpers.form_error')
      render :new, grade: @grade
    end
  end

  def index
    @grades = Bs::Grade.filter_and_sort([], []).page(params[:page])
    respond_to do |format|
      format.html { render }
      format.json { render json: @grades }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: @grade, include: {attendances: :user, performances: :user} }
    end
  end

  def edit
  end

  def update
    res = @grade.update!(permit_params)
    respond_to do |format|
      format.html do
        if res
          flash[:notice] = t('helpers.done.update', model: model_human)
          redirect_to backend_grades_path
        else
          flash[:notice] = t('helpers.form_error')
          render :edit, grade: @grade
        end
      end
      format.json do
        if res
          render status: :ok
        else
          render status: :internal_server_error
        end
      end
    end
  end

  def destroy
    @grade.destroy
    flash[:notice] = t('helpers.done.destroy', model: model_human)
    redirect_to backend_grades_path
  end

private

  def grades_pagecontext
    pagecontext(t('backend.pages.grades.title'), link: backend_grades_path)
  end

  def permit_params
    params.require(:grade).permit(
      :id, :level, :name,
      attendances_attributes: [:id, :user_id, :semester_id, :grade_id, :_destroy]
    )
  end

  def find_grade
    @grade = Bs::Grade.find(params[:id])
  end

end
