class CreateGols < ActiveRecord::Migration[5.2]
  def change
    create_table :gols do |t|
      t.string :title, null: false
      t.text :details, null: false
      t.boolean :status, null: false
      t.boolean :private_gol, null: false 
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :gols, :user_id
  end
end
