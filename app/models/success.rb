class Success < ApplicationRecord
  belongs_to :company
  belongs_to :project
  belongs_to :bid
end
