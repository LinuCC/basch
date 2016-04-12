class Bs::Frontend::SettingsController < Bs::FrontendController
  def index
    authorize :settings
    @page_data = {}
    render text: '', layout: true
  end
end
