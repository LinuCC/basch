class Bs::FrontendController < ApplicationController
  layout :frontend_layout

  before_action :set_generated_assets_dir
  helper_method :general_client_data

  def frontend_layout
    'bs/frontend/application'
  end

  def serialize_objects(*objects)
    final_hash = {}
    objects.each do |data|
      serialize_options = {}
      object = nil
      if data.is_a?(Hash)
        serialize_options = data[:options]
        object = data[:data]
      else
        object = data
      end
      final_hash.merge!(serialize_object(object, serialize_options))
    end
    final_hash
  end

  def general_client_data
    serialize_objects(
      {data: current_user, options: {include: {grade_attendances: :grade}}}
    )
  end

private

  def set_generated_assets_dir
    ReactOnRails.configuration.generated_assets_dir = Basch::Application.config.generated_frontend_assets_dir
  end

  def serialize_object(object, options)
    serializer = ActiveModelSerializers::SerializableResource.new(
      object, options
    )
    obj_hash = serializer.serializable_hash
    # Manually remove the "bs/", AMS seems to ignore use_relative_model_naming
    obj_hash.keys.each do |key|
      if key.to_s.starts_with?('bs/')
        obj_hash[key.to_s.sub('bs/', '').to_sym] = obj_hash.delete(key)
      end
    end
    obj_hash
  end
end
