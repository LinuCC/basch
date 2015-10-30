class ApplicationController < ActionController::Base

  include Pundit

  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  after_action :verify_authorized, except: :index

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

end
