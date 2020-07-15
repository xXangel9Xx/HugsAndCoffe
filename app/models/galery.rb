class Galery < ApplicationRecord
  has_one :perfil, dependent: :destroy
  has_one_attached :image
end
