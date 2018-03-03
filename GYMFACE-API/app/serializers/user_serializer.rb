class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :home_club_id
  has_many :klasses, through: :user_klasses
end
