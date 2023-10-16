# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do
    puts "Destroying tables..."
    Listing.destroy_all
    User.destroy_all

    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."
    User.create!(
        email: 'demo@user.io',
        password: 'password',
        first_name: 'Demo',
        last_name: 'User'
    )
    User.create!(
        email: 'davislucky@user.io',
        password: 'password',
        first_name: 'Davis',
        last_name: 'Lucky'
    )
    User.create!(
        email: 'julia@tennis.io',
        password: 'password',
        first_name: 'Julia',
        last_name: 'Kahn'
    )
    User.create!(
        email: 'shannon@uc.edu',
        password: 'password',
        first_name: 'Shannon',
        last_name: 'Millar'
    )
    User.create!(
        email: 'mitchell@merch.com',
        password: 'password',
        first_name: 'Mitchell',
        last_name: 'Chan'
    )

    puts "Creating listings..."

    Listing.create!(
        description: "In the heart of downtown San Francisco, La Monarca is a Kasa original within walking distance of Union Square, Market Street, and Chinatown. Built in 1915, this historic property in the Nob Hill neighborhood is surrounded by Victorian architecture and upscale dining. Experience the City by the Bay the right way!",
        title: "Beach House with amazing view",
        location: "Tiburon, California",
        price: 50,
        host_id: 1,
        num_beds: 2,
        num_guests: 2
    )

    Listing.create!(
        description: "In the heart of downtown San Francisco, La Monarca is a Kasa original within walking distance of Union Square, Market Street, and Chinatown. Built in 1915, this historic property in the Nob Hill neighborhood is surrounded by Victorian architecture and upscale dining. Experience the City by the Bay the right way!",
        title: "Beach House with not amazing view",
        location: "Riverside, California",
        price: 50,
        host_id: 1,
        num_beds: 2,
        num_guests: 2
    )
     Listing.create!(
        description: "In the heart of downtown San Francisco, La Monarca is a Kasa original within walking distance of Union Square, Market Street, and Chinatown. Built in 1915, this historic property in the Nob Hill neighborhood is surrounded by Victorian architecture and upscale dining. Experience the City by the Bay the right way!",
        title: "Not a house",
        location: "Los Angeles, California",
        price: 50,
        host_id: 1,
        num_beds: 2,
        num_guests: 2
    )
    Listing.create!(
        description: "In the heart of downtown San Francisco, La Monarca is a Kasa original within walking distance of Union Square, Market Street, and Chinatown. Built in 1915, this historic property in the Nob Hill neighborhood is surrounded by Victorian architecture and upscale dining. Experience the City by the Bay the right way!",
        title: "This is a 'seedy' place",
        location: "Ontario, California",
        price: 50,
        host_id: 1,
        num_beds: 2,
        num_guests: 2
    )
    Listing.create!(
        description: "In the heart of downtown San Francisco, La Monarca is a Kasa original within walking distance of Union Square, Market Street, and Chinatown. Built in 1915, this historic property in the Nob Hill neighborhood is surrounded by Victorian architecture and upscale dining. Experience the City by the Bay the right way!",
        title: "Call me a tree with all these seeds",
        location: "San Francisco, California",
        price: 50,
        host_id: 1,
        num_beds: 2,
        num_guests: 2
    )

    puts "Done!"
end