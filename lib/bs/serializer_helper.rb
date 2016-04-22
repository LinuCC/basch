module Bs::SerializerHelper

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
