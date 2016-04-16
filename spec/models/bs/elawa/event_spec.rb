require 'rails_helper'

RSpec.describe Bs::Elawa::Event, type: :model do
  it { should validate_presence_of(:name) }
  it { should have_many(:segments) }
  it { should validate_presence_of(:status) }
end
