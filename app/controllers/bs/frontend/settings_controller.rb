class Bs::Frontend::SettingsController < Bs::FrontendController

  before_action :set_user, only: [:update]

  def index
    @user = current_user
    authorize @user
    @page_data = {}
    render text: '', layout: true
  end

  def update
    authorize @user
    @user = Bs::User.find(params[:id])
    user_params = permit_params
    @user.lock_access! if user_params.delete(:lock) == 'true'
    if user_params[:password].present?
      @user.update!(user_params)
    else
      @user.update_without_password(user_params)
    end
    respond_to do |format|
      format.json { render json: @user }
      format.html {
        flash[:notice] = t(
          'helpers.done.update', model: Bs::User.model_name.human
        )
        redirect_to settings_path
      }
    end
  end

private

  def permit_params
    params.require(:user).permit(
      :email, :password, :password_confirmation, :lock
    )
  end

  def set_user
    @user = Bs::User.find(params[:id])
  end
end
