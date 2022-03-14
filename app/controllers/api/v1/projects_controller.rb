class Api::V1::ProjectsController < ApplicationController
  def recent
    projects = convert_for_front(
      Project.order("created_at DESC").limit(5)
    )
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
      :rep_division, :rep_person, :phone_number, :email, :url, :municipality_id
    )
  end

  def convert_for_front(projects)
    converted_projects = []
    projects.each do |project|
      converted_project = {
        id: project.id,
        name: project.name,
        category_id: project.category_id,
        overview: project.overview,
        qualification: project.qualification,
        bid_date: project.bid_date,
        rep_division: project.rep_division,
        rep_person: project.rep_person,
        phone_number: project.phone_number,
        email: project.email,
        url: project.url,
        municipality_id: project.municipality_id,
        municipality_name: Municipality.find(project.municipality_id)[:name],
        create_date: project.created_at.to_date
      }
      converted_projects.push(converted_project)
    end
    return converted_projects
  end
end