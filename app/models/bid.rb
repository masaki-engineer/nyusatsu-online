class Bid < ApplicationRecord
  validates :rep_division, presence: true
  validates :rep_person,   presence: true
  validates :phone_number, presence: true
  validates :email,        presence: true
  validates :price,        presence: true
  validates :project_id, uniqueness: { scope: :company_id }

  belongs_to :project
  belongs_to :company
  has_one :success
end
