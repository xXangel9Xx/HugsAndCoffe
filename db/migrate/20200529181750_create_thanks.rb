class CreateThanks < ActiveRecord::Migration[6.0]
  def change
    create_table :thanks do |t|
      t.boolean :coffe, default: false
      t.integer :value_coffes, default: 0
      t.integer :hug, default: 0
      t.string :name
      t.string :ocupacion
      t.text :message
      t.references :galery, null: false, foreign_key: true

      t.timestamps
    end
  end
end
