class ChangeColumn < ActiveRecord::Migration[5.2]
  # def change
  #   change_column :servers, :private, :boolean, :null => true
  # end
  def up
    change_column :servers, :private, :boolean, :null => true
    change_column :servers, :description, :string, :null => true
    change_column :servers, :server_image, :string, :null => true
  end

  def down
    change_column :servers, :private, :boolean, :null => false
    change_column :servers, :description, :string, :null => false
    change_column :servers, :server_image, :string, :null => false
  end
end
