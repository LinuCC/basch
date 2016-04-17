require 'rails_helper'

RSpec.describe Bs::Api::V1::Elawa::EventsController, type: :controller do
  login_admin
  describe 'GET #index' do
    before { get :index }
    it { should respond_with(200) }
  end
end
