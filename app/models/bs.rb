module Bs
  def self.table_name_prefix
    'bs_'
  end

  # Dont include bs_ in resource-paths generated by polymorphic_path
  def self.use_relative_model_naming?
    true
  end
end
