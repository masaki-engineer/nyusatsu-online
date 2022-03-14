class Project < ApplicationRecord
  validates :name,          presence: true
  validates :category_id,   numericality: { other_than: 0 }
  validates :overview,      presence: true
  validates :qualification, presence: true
  validates :bid_date,      presence: true
  validates :rep_division,  presence: true
  validates :rep_person,    presence: true
  validates :phone_number,  presence: true
  validates :email,         presence: true

  belongs_to :municipality
end
