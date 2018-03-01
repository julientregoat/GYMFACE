class User < ApplicationRecord
  has_many :user_klasses
  has_many :klasses, through: :user_klasses
  has_secure_password
  
end
