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

  scope :search, -> (search_params) do
    return if search_params.blank?

    name_like(search_params[:name])
      .category_id_is(search_params[:category_id])
      .prefecture_id_is(search_params[:prefecture_id])
      .bid_date_from(search_params[:bid_date_from])
      .bid_date_to(search_params[:bid_date_to])
      .create_date_from(search_params[:create_date_from])
      .create_date_to(search_params[:create_date_to])
      .municipality_id_is(search_params[:municipality_id])
  end
  scope :name_like, -> (name) {
    if name.present?
      words = name.split(/[[:blank:]]+/)
      query = (["projects.name LIKE ?"] * words.size).join(" AND ")
      where(query,*words.map{|w| "%#{w}%"})
    end
  }
  scope :category_id_is, -> (category_id) { where(category_id: category_id) if category_id.present? }
  scope :prefecture_id_is, -> (prefecture_id) { where(municipality: { prefecture_id: prefecture_id }) if prefecture_id.present? }
  scope :bid_date_from, -> (from) { where('? <= bid_date', from) if from.present? }
  scope :bid_date_to, -> (to) { where('bid_date <= ?', to) if to.present? }
  scope :create_date_from, -> (from) { where('? <= projects.created_at', from) if from.present? }
  scope :create_date_to, -> (to) { where('projects.created_at <= ?', to) if to.present? }
  scope :municipality_id_is, -> (municipality_id) { where(municipality_id: municipality_id) if municipality_id.present? }
end
