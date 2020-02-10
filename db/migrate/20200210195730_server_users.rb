class ServerUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :server_users do |t|
      t.integer :server_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :server_users, :server_id
    add_index :server_users, :user_id
  end
end
