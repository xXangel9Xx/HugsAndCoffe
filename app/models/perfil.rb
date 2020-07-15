class Perfil < ApplicationRecord
  has_one :user, dependent: :destroy
  has_one :galery, dependent: :destroy
  has_many :bank_account, dependent: :destroy
  
  has_one_attached :image


  validates :full_name, :ocupacion, format: {with: /\A[a-zA-Z]+\z/ ,message:"only allows letters"}

  
  validates :full_name, length: { in: 3..52 }
  before_save :full_name_capitalize
  
  private 

  def full_name_capitalize
    full_name = self.full_name.capitalize!  
  end

  
end
