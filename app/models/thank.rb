class Thank < ApplicationRecord
  has_one :galery, dependent: :destroy
end
