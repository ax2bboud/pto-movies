class CreateApiMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :api_movies do |t|
      t.text :name
      t.text :genre
      t.text :thumbnail
      t.text :image
      t.text :owner
      t.text :market_price

      t.timestamps
    end
  end
end
