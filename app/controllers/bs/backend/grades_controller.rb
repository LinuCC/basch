class Bs::Backend::GradesController < Bs::BackendController

  before_action :auth_action
  before_action :grades_pagecontext
  before_action :find_grade, only: [:edit, :update, :destroy]

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
  end

  def edit
  end

  def update
    res = @user.save(permit_params)
    if res
      flash[:notice] = t('helpers.done.update', model: model_human)
      redirect_to backend_grades_path
    else
      flash[:notice] = t('helpers.form_error')
      render :edit, grade: @grade
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
      :level, :name
    )
  end

  def find_grade
    @grade = Bs::Grade.find(params[:id])
  end

end
