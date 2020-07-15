class CreateGaleries < ActiveRecord::Migration[6.0]
  def change
    create_table :galeries do |t|
      t.references :perfil, null: false, foreign_key: true
      t.string :subtitulo
      t.timestamps
    end
  end
end
