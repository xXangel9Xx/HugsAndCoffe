class Galery < ApplicationRecord
  has_one :perfil, dependent: :destroy
  has_one_attached :image
 # validates :image, presence: true, blob: {content_type:['image/jpg', 'image/jpeg', 'image/png'], size_range: 1..3.megabytes}
  validates :subtitulo, length: { in: 3..52 }
end
  #has_many :thank, dependent: :destroy