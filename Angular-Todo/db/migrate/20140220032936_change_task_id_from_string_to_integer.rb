class ChangeTaskIdFromStringToInteger < ActiveRecord::Migration

  def up
    change_column :tasks, :list_id, :string
  end

  def down
    change_column :tasks, :list_id, :integer
  end
end
