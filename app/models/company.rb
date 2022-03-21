# frozen_string_literal: true

class Company < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  validates :name,          presence: true
  validates :postal_code,   presence: true
  validates :prefecture_id, numericality: { other_than: 0 }
  validates :city,          presence: true
  validates :addresses,     presence: true
  validates :phone_number,  presence: true
  
  has_many :bids
  has_many :successes
end
