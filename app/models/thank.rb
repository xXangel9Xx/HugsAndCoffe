class Thank < ApplicationRecord
    has_many :operation, dependent: :destroy 
end
