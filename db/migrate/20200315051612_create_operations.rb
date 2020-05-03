class CreateOperations < ActiveRecord::Migration[6.0]
  def change
    create_table :operations do |t|
      t.references :estado, foreign_key: true
      t.references :thank, foreign_key: true
      t.text :comentario
      t.string :correo

      t.timestamps
    end
  end
end
#el null: false debe quitarse 