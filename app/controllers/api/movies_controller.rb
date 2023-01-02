class Api::MoviesController < ApplicationController
  def index
    @movies = Api::Movie.all.select(:id, :name, :thumbnail)
    render :json => @movies
  end

  def show
    @movie = Api::Movie.find(params[:id])
    render :json => @movie
  end
end