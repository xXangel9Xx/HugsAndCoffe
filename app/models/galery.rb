class Galery < ApplicationRecord
  has_one :perfil, dependent: :destroy
  has_many :thank, dependent: :destroy
  has_one_attached :image

  validates :subtitulo, length: { in: 3..52 }
end
