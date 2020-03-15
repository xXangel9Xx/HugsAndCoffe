class Operation < ApplicationRecord
  has_one :estado, dependent: :destroy
  has_one :thanks, dependent: :destroy
  validates :comentario, :correo, format: {with: /\A[a-zA-Z]+\z/ ,message:"only allows letters"}
end
