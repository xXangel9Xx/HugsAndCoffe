class Galery < ApplicationRecord
  has_one :perfil
  has_one_attached :image
end
