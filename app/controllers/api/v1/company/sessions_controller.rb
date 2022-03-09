class Api::V1::Company::SessionsController < ApplicationController
  def index
    if current_api_v1_company
      render json: { is_login: true, data: current_api_v1_company }
    else
      render json: { is_login: false, message: "ユーザーが存在しません" }
    end
  end
end
