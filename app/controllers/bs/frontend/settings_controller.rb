class Bs::Frontend::SettingsController < Bs::FrontendController
  def index
    authorize :settings
    @page_data = {}
    render text: '', layout: true
  end

  def update
    authorize :settings
    @user = Bs::User.find(params[:id])
    if permit_params[:password].present?
      @user.update!(permit_params)
    else
      @user.update_without_password(permit_params)
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

  def permit_params
    params.require(:user).permit(
      :email, :password, :password_confirmation, :locked
    )
  end
end
