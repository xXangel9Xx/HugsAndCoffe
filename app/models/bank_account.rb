class BankAccount < ApplicationRecord
  has_one :user
  validates :entidad,:typeAccount ,format:{with:/\A[a-zA-Z]+\z/ ,message:"only allows letters"}
  validates :account, :identification ,format:{with:/\A[+-]?\d+\z/ ,message:"only allows numbers"}
end
