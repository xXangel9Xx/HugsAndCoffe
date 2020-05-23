class Galery < ApplicationRecord
  has_one :perfil
  has_many_attached :images
end
