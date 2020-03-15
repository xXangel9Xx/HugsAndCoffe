class CreateOperations < ActiveRecord::Migration[6.0]
  def change
    create_table :operations do |t|
      t.references :estado, null: false, foreign_key: true
      t.references :thanks, null: false, foreign_key: true
      t.text :comentario
      t.string :correo

      t.timestamps
    end
  end
end
