# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create(username:"artist_1")
u2 = User.create(username:"artist_2")
u3 = User.create(username:"NotPicasso")
u4 = User.create(username:"Viewer_1")
u5 = User.create(username: "Ultimate_Viewer")

a1 = Artwork.create(title: "Tower", image_url: "www.tower.com", artist_id: 1)
a2 = Artwork.create(title: "Cave", image_url: "www.cave.com", artist_id: 1)
a3 = Artwork.create(title: "Lake", image_url: "www.lake.com", artist_id: 2)
a4 = Artwork.create(title: "Lake the Second", image_url: "www.lake.com", artist_id: 2)

as1 = ArtworkShare.create(artwork_id: a1.id, viewer_id: u5.id)
as2 = ArtworkShare.create(artwork_id: a2.id, viewer_id: u5.id)
as3 = ArtworkShare.create(artwork_id: a3.id, viewer_id: u3.id)
as4 = ArtworkShare.create(artwork_id: a4.id, viewer_id: u4.id)
as5 = ArtworkShare.create(artwork_id: a1.id, viewer_id: u3.id)
as6 = ArtworkShare.create(artwork_id: a2.id, viewer_id: u3.id)
as7 = ArtworkShare.create(artwork_id: a4.id, viewer_id: u3.id)
as8 = ArtworkShare.create(artwork_id: a1.id, viewer_id: u4.id)
as9 = ArtworkShare.create(artwork_id: a1.id, viewer_id: u1.id)
as10 = ArtworkShare.create(artwork_id: a2.id, viewer_id: u1.id)

