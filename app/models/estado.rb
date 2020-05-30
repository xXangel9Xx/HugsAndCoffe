class Estado < ApplicationRecord
 has_one :perfil, dependent: :destroy 
 has_one :thank
 validates :name, :ocupacion , format: {with: /\A[a-zA-Z]+\z/ , message: "only allows letters" }
 validates :message, length: { in: 3..350 }

end
