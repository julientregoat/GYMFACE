class Klass < ApplicationRecord
  has_many :user_klasses
  has_many :users, through: :user_klasses
end
