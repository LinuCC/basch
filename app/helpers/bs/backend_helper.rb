module Bs::BackendHelper

  def cancel_back_link
    link_to(t('helpers.cancel'), :back, class: 'btn btn-link')
  end

  def simple_horizontal_form_for(*args, &block)
    opts = (args[1] || {}).reverse_merge(
      {html: {class: 'form-horizontal'}, wrapper: :horizontal_form}
    )
    simple_form_for(args[0], opts, &block)
  end

end
