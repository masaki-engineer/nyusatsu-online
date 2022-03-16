class Api::V1::MunicipalitiesController < ApplicationController
  def show
    municipality = Municipality.find(params[:id])
    render json: municipality
  end
end