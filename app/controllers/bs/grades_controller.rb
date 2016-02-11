class Bs::GradesController < Bs::BackendController

  before_action :auth_action
  before_action :grades_pagecontext
  before_action :find_grade, only: []

  def new
    pagecontext(t('backend.pages.grades.new.title'))
    @grade = Bs::Grade.new
  end

  def create
    @grade = Bs::Grade.new(permit_params)
    res = @grade.save
    if res
      flash[:notice] = t('helpers.done.create', model: model_human)
      redirect_to backend_users_path
    else
      flash[:notice] = t('helpers.form_error')
      render :new, grade: @grade
    end
  end

  def index
    @grades = Bs::Grades.all
  end

  def edit
  end

  def update
    res = @user.save(permit_params)
    if res
      flash[:notice] = t('helpers.done.update', model: model_human)
      redirect_to backend_users_path
    else
      flash[:notice] = t('helpers.form_error')
      render :edit, grade: @grade
    end
  end

  def destroy
    @grade.destroy
    flash[:notice] = t('helpers.done.destroy', model: model_human)
    redirect_to backend_users_path
  end

end
