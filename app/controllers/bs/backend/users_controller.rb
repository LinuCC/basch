class Bs::Backend::UsersController < Bs::BackendController

  before_action :auth_action
  before_action :users_pagecontext
  before_action :find_user, only: [:show, :edit, :update, :destroy]

  def new
    pagecontext(t('backend.pages.users.new.title'))
    @user = Bs::User.new
  end

  def create
    @user = Bs::User.new(permit_params)
    res = @user.save
    if res
      flash[:notice] = t('helpers.done.create', model: model_human)
      redirect_to backend_users_path
    else
      flash[:notice] = t('helpers.form_error')
      render :new, user: @user
    end
  end

  def index
    @users = Bs::User.filter_and_sort(params.slice(*allowed_filters), [])
      .page(params[:page])
    respond_to do |format|
      format.html { render }
      format.json { render json: @users }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: @user }
    end
  end

  def edit
  end

  def update
    if permit_params[:password].present?
      @user.update!(permit_params)
    else
      @user.update_without_password(permit_params)
    end
    flash[:notice] = t('helpers.done.update', model: model_human)
    redirect_to backend_users_path
  end

  def destroy
    @user.destroy
    flash[:notice] = t('helpers.done.destroy', model: model_human)
    redirect_to backend_users_path
  end

private

  def auth_action
    authorize :backend
  end

  def users_pagecontext
    pagecontext(t('backend.pages.users.title'), link: backend_users_path)
  end

  def find_user
    @user = Bs::User.find(params[:id])
  end

  def permit_params
    params.require(:user).permit(
      :name, :username, :password, :password_confirmation, :email,
      :telephone, :birth_date
    )
  end

  def allowed_filters
    %w(with_username)
  end

end
