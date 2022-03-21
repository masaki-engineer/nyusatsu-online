class Bid < ApplicationRecord
  validates :rep_division, presence: true
  validates :rep_person,   presence: true
  validates :phone_number, presence: true
  validates :email,        presence: true
  validates :price,        presence: true

  belongs_to :project
  belongs_to :company
end
