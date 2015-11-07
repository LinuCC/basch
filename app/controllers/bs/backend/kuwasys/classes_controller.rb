class Bs::Backend::Kuwasys::ClassesController < Bs::Backend::Kuwasys::DashboardController

  before_action :auth_action
  before_action :classes_pagecontext
  before_action :find_class, only: [:edit, :update, :destroy]

  def new
    pagecontext(t('backend.pages.kuwasys.classes.new.title'))
    @class = Bs::Kuwasys::Class.new
  end

  def create
    @class = Bs::Kuwasys::Class.new(permit_params)
    @class.save!
    flash[:notice] = t('helpers.done.create', model: model_human)
    redirect_to backend_kuwasys_classes_path
  end

  def index
    @classes = Bs::Kuwasys::Class.all.page(params[:page])
  end

  def edit
    pagecontext(t('backend.pages.kuwasys.classes.edit.title'))
  end

  def update
    @class.update_attributes!(permit_params)
    flash[:notice] = t('helpers.done.update', model: model_human)
    redirect_to backend_kuwasys_classes_path
  end

  def destroy
    @class.destroy
    flash[:notice] = t('helpers.done.destroy', model: model_human)
    redirect_to backend_kuwasys_classes_path
  end

private

  def find_class
    @class = Bs::Kuwasys::Class.find(params[:id])
  end

  def permit_params
    params.require(:bs_kuwasys_class).permit(
      :name, :description, :start_date, :end_date, :event_status
    )
  end

  def classes_pagecontext
    pagecontext(
      t('backend.pages.kuwasys.classes.title'),
      link: backend_kuwasys_classes_path
    )
  end

end
