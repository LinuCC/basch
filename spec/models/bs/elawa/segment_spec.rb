require 'rails_helper'

RSpec.describe Bs::Elawa::Segment, type: :model do
  it { should validate_presence_of(:name) }
  it { should belong_to(:event) }
end
