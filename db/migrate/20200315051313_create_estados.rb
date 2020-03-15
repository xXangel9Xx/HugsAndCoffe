class CreateEstados < ActiveRecord::Migration[6.0]
  def change
    create_table :estados do |t|
      t.string :description
      t.date :date
      t.references :perfil, null: false, foreign_key: true

      t.timestamps
    end
  end
end
