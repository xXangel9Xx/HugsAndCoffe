# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_15_051642) do

  create_table "estados", force: :cascade do |t|
    t.string "description"
    t.date "date"
    t.integer "perfil_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["perfil_id"], name: "index_estados_on_perfil_id"
  end

  create_table "operations", force: :cascade do |t|
    t.integer "estado_id", null: false
    t.integer "thanks_id", null: false
    t.text "comentario"
    t.string "correo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["estado_id"], name: "index_operations_on_estado_id"
    t.index ["thanks_id"], name: "index_operations_on_thanks_id"
  end

  create_table "perfils", force: :cascade do |t|
    t.string "name"
    t.string "last_name"
    t.integer "coffee"
    t.integer "hugs"
    t.integer "money"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_perfils_on_user_id"
  end

  create_table "thanks", force: :cascade do |t|
    t.integer "coffee"
    t.integer "hug"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "estados", "perfils"
  add_foreign_key "operations", "estados"
  add_foreign_key "operations", "thanks", column: "thanks_id"
  add_foreign_key "perfils", "users"
end
