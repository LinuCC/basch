# lib/tasks/assets.rake
# The webpack task must run before assets:environment task.
# Otherwise Sprockets cannot find the files that webpack produces.
Rake::Task["assets:precompile"]
  .clear_prerequisites
  .enhance(["assets:compile_environment"])

namespace :assets do
  # In this task, set prerequisites for the assets:precompile task
  task compile_environment: :webpack do
    Rake::Task["assets:environment"].invoke
  end

  desc "Compile assets with webpack"
  task :webpack do
    sh "cd frontend-client && npm run build:production:client"
    sh "cd backend-client && npm run build:production:client"
    sh "cd frontend-client && npm run build:production:client"
    sh "cd backend-client && npm run build:production:server"
    sh "mkdir -p public/assets"

    # Critical to manually copy non js/css assets to public/assets as we don't want to fingerprint them
    sh "cp -rf app/assets/webpack/bs/frontend/*.woff* app/assets/webpack/bs/frontend/*.svg app/assets/webpack/bs/frontend/*.ttf "\
       "app/assets/webpack/bs/frontend/*.eot* public/assets"
    sh "cp -rf app/assets/webpack/bs/backend/*.woff* app/assets/webpack/bs/backend/*.svg app/assets/webpack/bs/backend/*.ttf "\
       "app/assets/webpack/bs/backend/*.eot* public/assets"

    # TODO: We should be gzipping these
  end

  task :clobber do
    rm_rf "#{Rails.application.config.root}/app/assets/webpack/bs/frontend"
    rm_rf "#{Rails.application.config.root}/app/assets/webpack/bs/backend"
  end
end
