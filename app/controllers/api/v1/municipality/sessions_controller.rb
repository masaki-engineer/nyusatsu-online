class Api::V1::Municipality::SessionsController < ApplicationController
  def index
    if current_api_v1_municipality
      render json: { is_login: true, data: current_api_v1_municipality }
    else
      render json: { is_login: false, message: "ユーザーが存在しません" }
    end
  end
end
