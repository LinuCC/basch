class Bs::Backend::UsersController < Bs::BackendController

  before_action :permit_params, only: [:create]
  before_action :auth_action, only: [:new, :create, :index]

  def new
    @user = Bs::User.new
  end

  def create
    @user = Bs::User.new(params[:bs_user])
    @user.save!
  end

  def index
    @users = Bs::User.all
  end

protected

  def auth_action
    authorize :backend
  end

  def permit_params
    params.require(:bs_user)
      .permit(:name, :username, :email, :telephone, :birth_date)
  end

end
