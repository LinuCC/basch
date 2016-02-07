module Bs::Backend::SchoolyearsHelper

  def all_statuses
    Bs::Schoolyear.statuses.keys.map do |status|
      [
        t("activerecord.attributes.bs/schoolyear.status.#{status}"),
        status
      ]
    end
  end
end
