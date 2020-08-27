class Thank < ApplicationRecord
  has_one :perfil, dependent: :destroy
  validates :name,:ocupacion,:message, presence: true

end
