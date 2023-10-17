class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.bigint :author_id, null: false
      t.bigint :listing_id, null: false
      t.integer :location, null: false
      t.integer :cleanliness, null: false
      t.integer :accuracy, null: false
      t.integer :value, null: false
      t.integer :check_in, null: false
      t.integer :communication, null: false
      t.text :blurb, null: false

      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :listing_id
    add_foreign_key :reviews, :users, column: :author_id
    add_foreign_key :reviews, :listings, column: :listing_id
  end
end
