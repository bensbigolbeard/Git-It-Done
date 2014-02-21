class TasksController < ApplicationController
  respond_to :json
  
  def create
    @list = List.find(params[:list_id])

    @task = @list.tasks.create!(
      :title => params[:title], 
      :details => params[:details]
      )

    respond_with(@task) do |format|
      format.json {render json: @task.as_json }
    end    
  end

  def update
    
  end

  def destroy
  end
end
