class CreateBankAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :bank_accounts do |t|
     # t.references :user, null: false, foreign_key: true
      t.string :entidad
      t.string :email
      t.string :account
      t.string :identification
      t.string :typeAccount

      t.timestamps
    end
  end
end