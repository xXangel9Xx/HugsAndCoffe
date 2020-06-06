class Estado < ApplicationRecord
 #has_one :perfil, dependent: :destroy 
 has_many :thank
 has_many_attached :images
 validates :description, format: {with: /\A[a-zA-Z]+\z/ , message: "only allows letters" }
end
