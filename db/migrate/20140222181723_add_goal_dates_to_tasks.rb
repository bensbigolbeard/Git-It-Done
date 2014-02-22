class AddGoalDatesToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :goal_date, :date
  end
end
