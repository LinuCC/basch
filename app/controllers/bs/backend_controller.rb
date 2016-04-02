class Bs::BackendController < ApplicationController
  layout :backend_layout

  before_action :set_generated_assets_dir
  before_action :backend_pagecontext

  helper FontAwesome::Rails::IconHelper
  helper_method :model_human

  def backend_layout
    'bs/backend/application'
  end

  def set_pageheading(heading)
    @pageheading = heading
  end

  def add_breadcrumb(name, link: false)
    @breadcrumbs ||= []
    @breadcrumbs.push({name: name, link: link})
  end

  def pagecontext(name, link: false)
    set_pageheading(name)
    add_breadcrumb(name, link: link)
  end

private

  def set_generated_assets_dir
    ReactOnRails.configuration.generated_assets_dir = Basch::Application.config.generated_backend_assets_dir
  end

  def backend_pagecontext
    pagecontext(t('backend.pages.title'), link: backend_root_path)
  end

  def model_human
    model.model_name.human
  end

  def model
    controller_path.classify.gsub('::Backend', '').constantize
  end

  def auth_action
    authorize :backend
  end


end
