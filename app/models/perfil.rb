class Perfil < ApplicationRecord
 # has_one :user, dependent: :destroy
  has_one_attached :image
  has_many :estados, dependent: :destroy
  validates :name, :last_name, format: {with: /\A[a-zA-Z]+\z/ ,message:"only allows letters"}
  validates :hugs, :coffee, format: {with: /\A[+-]?\d+\z/, message:"only allows number"}
  
  validates :name, :last_name, length: { in: 3..20 }
  before_save :name_capitalize, :last_name_capitalize
  
  private 

  def name_capitalize
    name = self.name.capitalize!  
  end

  def last_name_capitalize
    last_name = self.last_name.capitalize!
  end
  
end
