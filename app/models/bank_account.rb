class BankAccount < ApplicationRecord
  has_one :user, dependent: :destroy
  validates :typeAccount ,format:{with:/\A[a-zA-Z]+\z/ ,message:"only allows letters"}
  validates  :identification ,format:{with:/\A[+-]?\d+\z/ ,message:"only allows numbers"}

end
#:account,:entidad,