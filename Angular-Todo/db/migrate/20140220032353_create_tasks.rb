class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :details
      t.string :list_id

      t.timestamps
    end
  end
end
