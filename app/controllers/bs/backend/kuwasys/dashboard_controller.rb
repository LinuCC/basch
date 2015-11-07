class Bs::Backend::Kuwasys::DashboardController < Bs::BackendController

  before_action :auth_action
  before_action :kuwasys_dashboard_pagecontext

  def index

  end

private

  def kuwasys_dashboard_pagecontext
    pagecontext(
      t('backend.pages.kuwasys.dashboard.title'),
      link: backend_kuwasys_dashboard_index_path
    )
  end

end
