class CreateThanks < ActiveRecord::Migration[6.0]
  def change
    create_table :thanks do |t|
      t.integer :coffee
      t.integer :hug, default:0

      t.timestamps
    end
  end
end
