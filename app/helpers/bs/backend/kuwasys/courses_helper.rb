module Bs::Backend::Kuwasys::CoursesHelper

  def all_event_statuses
    Bs::Kuwasys::Course.event_statuses.keys.map do |status|
      [
        t("activerecord.attributes.bs/kuwasys/course.event_statuses.#{status}"),
        status
      ]
    end
  end
end
