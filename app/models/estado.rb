class Estado < ApplicationRecord
 has_one :perfil, dependent: :destroy 
# validates :description, format: {with: /\A[a-zA-Z]+\z/ , message: "only allows letters" }
 validates :description, length: { in: 3..350 }

end
