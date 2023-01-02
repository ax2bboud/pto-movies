require 'rails_helper'

RSpec.describe Api::MoviesController, type: :controller do
  describe "GET index" do
    it "returns a list of all movies" do
      get :index
      expect(response.body).to eq(Api::Movie.all.select(:id, :name, :thumbnail).to_json)
    end
  end

  describe "GET movie" do
    it "returns the movie details" do
      movie = Api::Movie.create
      get :show, params: { id: movie.id }
      expect(response.body).to eq(movie.to_json)
    end
  end
end