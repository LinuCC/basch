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

  def dropdown_config_toggle(htmlId)
    name = "dropdown-#{htmlId}"
    content_tag(:div, class: 'dropdown') do
      button = content_tag(
        :a, id: name, type: 'button', class: 'dropdown-toggle', tabindex: 0,
        data: {toggle: 'dropdown'}
      ) do
        fa_icon('cog lg')
      end
      dropdown = content_tag(
        :div, class: 'dropdown-menu dropdown-menu-right',
        aria: {labelledBy: name}
      ) do
        yield
      end
      "#{button}#{dropdown}".html_safe
    end
  end

end
