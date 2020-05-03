class Operation < ApplicationRecord
  has_one :estado, dependent: :destroy
  has_many :thanks, dependent: :destroy
  validates :comentario, :correo, presence: true

end
#  def self.transaction(operation)
#    realizado = false
#    thank = Thank.find_by(id:operation[:thank_id])
#    estado = Estado.find_by(id:operation[:estado_id])
#    perfil = Perfil.find_by(id:estado[:perfil_id])
#    if thank[:hug] != 0 && perfil.save
#     perfil[:hugs] = perfil[:hugs] + thank[:hug]
#     perfil.save
#     return realizado = true
#    elsif thank[:coffee] != 0  && perfil.save
#     perfil[:coffee] = perfil[:coffee] + thank[:coffee]
#     perfil.save
#     return realizado = false
#    end
#  end 