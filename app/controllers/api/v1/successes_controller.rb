class Api::V1::SuccessesController < ApplicationController
  def create
    success = Success.new(success_params)
    if success.save
      render json: success
    else
      render json: success.errors, status: 422
    end
  end

  private

  def success_params
    params.require(:success).permit(:bid_id)
  end
end