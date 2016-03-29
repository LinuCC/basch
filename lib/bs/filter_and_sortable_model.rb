module Bs::FilterAndSortableModel

  extend ActiveSupport::Concern
  module ClassMethods

    ##
    # Searches for all entries of the model fulfilling the constraints set
    # by filtering_params.
    def filter_and_sort(filtering_params, sorting_params)
      results = self.where(nil)
      # We only allow asc and desc as sorting options

      results = apply_scopes(results, filtering_params) if filtering_params
      if sorting_params
        sorting_params.select! do |key, value|
          %w(asc desc).include?(value.to_s)
        end
        results = apply_scopes(results, sorting_params)
      end
      results
    end

    def apply_scopes(proxies, scopes)
      scopes.each do |scope_name, value|
        proxies = proxies.public_send(scope_name, value) if value.present?
      end
      proxies
    end

  end
end
