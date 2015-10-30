class ApplicationController < ActionController::Base

  include Pundit

  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!

  after_action :verify_authorized, unless: :devise_controller?

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) do |u|
      u.permit(
        :username, :email, :password, :password_confirmation, :remember_me
      )
    end
    devise_parameter_sanitizer.for(:sign_in) do |u|
      u.permit(:login, :username, :email, :password, :remember_me)
    end
    devise_parameter_sanitizer.for(:account_update) do |u|
      u.permit(
        :username, :email, :password, :password_confirmation, :current_password
      )
    end
  end

  def user_not_authorized
    flash[:alert] = 'Not authorized.'
    redirect_to(request.referrer || root_path)
  end

end
