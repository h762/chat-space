class CreateChats < ActiveRecord::Migration[6.0]
  def change
    create_table :chats do |t|
      t.integer :user_id, null: false, foregn_key: true
      t.integer :group_id, null: false, foreign_key: true
      t.text :content
      t.string :image
      t.timestamps
    end
  end
end
