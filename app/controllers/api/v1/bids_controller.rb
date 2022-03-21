class Api::V1::BidsController < ApplicationController
  def create
    bid = Bid.new(bid_params)
    if bid.save
      render json: bid
    else
      render json: bid.errors, status: 422
    end
  end

  private

  def bid_params
    params.require(:bid).permit(
      :rep_division, :rep_person, :phone_number, :email, :price, :company_id, :project_id
    )
  end
end