class ApplicationController < ActionController::Base

  include Pundit

  protect_from_forgery with: :exception

  before_action :set_generated_assets_dir
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!

  after_action :verify_authorized, unless: :devise_controller?

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(
      :sign_up,
      keys: [:username, :email, :password, :password_confirmation, :remember_me]
    )
    devise_parameter_sanitizer.permit(
      :sign_in, keys: [:login, :username, :email, :password, :remember_me]
    )
    devise_parameter_sanitizer.permit(
      :account_update,
      keys: [
        :username, :email, :password, :password_confirmation, :current_password
      ]
    )
  end

  def user_not_authorized
    flash[:alert] = 'Not authorized.'
    redirect_to(request.referrer || root_path)
  end

  # The login assets are included in the frontend client
  def set_generated_assets_dir
    ReactOnRails.configuration.generated_assets_dir = Basch::Application.config.generated_backend_assets_dir
  end

end
