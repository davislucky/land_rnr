class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.text :description
      t.integer :num_guests
      t.integer :num_beds
      t.string :type
      t.integer :price, null: false
      t.float :lat
      t.float :long
      t.boolean :parking, default: true
      t.string :location
      t.boolean :heating, default: true
      t.boolean :ac, default: true
      t.references :host_id, index: true, foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end
