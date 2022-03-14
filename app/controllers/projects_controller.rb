class Api::V1::ProjectsController < ApplicationController
  def recent
    projects = Project.order("created_at DESC").limit(5)
    render json: projects
  end
end