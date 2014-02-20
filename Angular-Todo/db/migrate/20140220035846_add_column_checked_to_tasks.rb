class AddColumnCheckedToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :checked, :boolean, :default => false
  end
end
