module Bs::Backend::Kuwasys::ClassesHelper

  def all_event_statuses
    Bs::Kuwasys::Class.event_statuses.keys.map do |status|
      [
        t("activerecord.attributes.bs/kuwasys/class.event_statuses.#{status}"),
        status
      ]
    end
  end
end
