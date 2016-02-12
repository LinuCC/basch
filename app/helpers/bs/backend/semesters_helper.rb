module Bs::Backend::SemestersHelper

  def all_statuses
    Bs::Semester.statuses.keys.map do |status|
      [
        t("activerecord.attributes.bs/semester.statuses.#{status}"),
        status
      ]
    end
  end
end
