# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'the-movies-collection-dummies.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'UTF-8')
csv.each do |row|
  t = Api::Movie.find_or_create_by(name: row['name']) do |movie|
    movie.genre = row['genre']
    movie.thumbnail = row['thumbnail']
    movie.image = row['image']
    movie.owner = row['owner']
    movie.market_price = row['market price']
    puts "#{movie.name} saved!"
  end
end