FactoryGirl.define do
  factory :user, class: 'Bs::User' do
    username 'john_cena'
    email 'john_cena@aol.com'
    password 'password'
    password_confirmation 'password'

    after(:create) {|user| user.add_role(:user)}

    factory :admin do
      after(:create) {|user| user.add_role(:admin)}
    end

    factory :super_admin do
      after(:create) {|user| user.add_role(:super_admin)}
    end
  end
end
