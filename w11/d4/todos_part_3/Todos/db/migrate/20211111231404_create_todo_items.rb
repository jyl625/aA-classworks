class CreateTodoItems < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_items do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.boolean :done, null: false, default: false

      t.timestamps
    end

  end
end
