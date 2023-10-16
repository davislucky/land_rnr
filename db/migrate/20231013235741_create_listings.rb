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
      t.bigint :host_id, null: false
      t.timestamps
    end
    add_index :listings, :host_id
    add_foreign_key :listings, :users, column: :host_id
  end
end
