class Success < ApplicationRecord
  validates :bid_id, uniqueness: true
  belongs_to :bid
end
