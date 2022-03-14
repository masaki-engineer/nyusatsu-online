class Api::V1::ProjectsController < ApplicationController
  def recent
    projects = Project.order("created_at DESC").limit(5)
    render json: projects
  end

  def create
    project = Project.new(project_params)
    if project.save
      render json: project
    else
      render json: project.errors, status: 422
    end
  end

  private

  def project_params
    params.require(:project).permit(
      :name, :category_id, :overview, :qualification, :bid_date,
      :rep_division, :rep_person, :phone_number, :email, :url
    ).merge(municipality_id: current_api_v1_municipality.id)
  end
end