class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.bigint :guest_id, null: false
      t.integer :num_guests, null: false
      t.date :check_in, null: false
      t.date :check_out, null: false
      t.bigint :listing_id, null: false
      t.timestamps
    end

    add_index :reservations, :guest_id
    add_index :reservations, :listing_id
    add_foreign_key :reservations, :users, column: :guest_id
    add_foreign_key :reservations, :listings, column: :listing_id
  end
end
