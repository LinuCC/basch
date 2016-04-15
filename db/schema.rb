# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160415115223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bs_grade_attendances", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "grade_id",    null: false
    t.integer  "semester_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "bs_grade_attendances", ["user_id", "grade_id", "semester_id"], name: "index_bs_grade_attendances_user_grade_semester_unique", unique: true, using: :btree

  create_table "bs_grade_performances", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "grade_id",    null: false
    t.integer  "semester_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "bs_grade_performances", ["user_id", "grade_id", "semester_id"], name: "index_bs_grade_performances_user_grade_semester_unique", unique: true, using: :btree

  create_table "bs_grades", force: :cascade do |t|
    t.string   "level",      default: "", null: false
    t.string   "name",                    null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "bs_kuwasys_attendances", force: :cascade do |t|
    t.integer  "user_id",                null: false
    t.integer  "course_id",              null: false
    t.integer  "status",     default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "bs_kuwasys_courses", force: :cascade do |t|
    t.string   "name",                      null: false
    t.text     "description",  default: ""
    t.date     "start_date"
    t.date     "end_date"
    t.integer  "event_status", default: 0,  null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "bs_kuwasys_cycles", force: :cascade do |t|
    t.string   "name",                            null: false
    t.integer  "status",              default: 0, null: false
    t.date     "start_date"
    t.date     "end_date"
    t.date     "register_start_date"
    t.date     "register_end_date"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

  create_table "bs_kuwasys_performances", force: :cascade do |t|
    t.integer  "user_id",                null: false
    t.integer  "course_id",              null: false
    t.integer  "status",     default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "bs_locations", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bs_semesters", force: :cascade do |t|
    t.string   "name",                   null: false
    t.integer  "status",     default: 0, null: false
    t.date     "start_date"
    t.date     "end_date"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "bs_users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.integer  "failed_attempts",        default: 0,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.string   "name"
    t.string   "username",                            null: false
    t.string   "telephone"
    t.date     "birth_date"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "bs_users", ["email"], name: "index_bs_users_on_email", unique: true, using: :btree
  add_index "bs_users", ["reset_password_token"], name: "index_bs_users_on_reset_password_token", unique: true, using: :btree
  add_index "bs_users", ["unlock_token"], name: "index_bs_users_on_unlock_token", unique: true, using: :btree
  add_index "bs_users", ["username"], name: "index_bs_users_on_username", unique: true, using: :btree

  create_table "bs_users_roles", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "role_id"
  end

  add_index "bs_users_roles", ["user_id", "role_id"], name: "index_bs_users_roles_on_user_id_and_role_id", using: :btree

  create_table "roles", force: :cascade do |t|
    t.string   "name"
    t.integer  "resource_id"
    t.string   "resource_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "roles", ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id", using: :btree
  add_index "roles", ["name"], name: "index_roles_on_name", using: :btree

end
