class Bs::Backend::UsersController < Bs::BackendController

  before_action :auth_action, only: [:new, :create, :index, :destroy]
  before_action :users_pagecontext

  def new
    pagecontext(t('backend.pages.users.new.title'))
    @user = Bs::User.new
  end

  def create
    @user = Bs::User.new(permit_params)
    @user.save!
    flash[:notice] = t('helpers.done.create', model: model_human)
    redirect_to backend_users_path
  end

  def index
    @users = Bs::User.all.page(params[:page])
  end

  def destroy
    @user = Bs::User.find(params[:id])
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

  def permit_params
    params.require(:bs_user).permit(
      :name, :username, :password, :password_confirmation, :email,
      :telephone, :birth_date
    )
  end

end
