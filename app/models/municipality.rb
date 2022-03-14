# frozen_string_literal: true

class Municipality < ActiveRecord::Base
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
  validates :home_page_url, presence: true

  has_many :projects
end
