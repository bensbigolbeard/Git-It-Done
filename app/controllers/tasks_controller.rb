class TasksController < ApplicationController
  respond_to :json

  def index
    @tasks = Task.all
    
    respond_with(@tasks) do |format|
      format.json {render json: @tasks.as_json }
    end
  end
  
  def show
    @task = Task.find(params[:id])

    respond_with(@task) do |format|
      format.json {render json: @task.as_json }
    end
  end

  def create
    @list = List.find(task_params[:list_id])

    @task = @list.tasks.create!(task_params)

    respond_with(@task) do |format|
      format.json {render json: @task.as_json }
    end    
  end

  def update
    @task = Task.find(task_params[:id])
    @task.update!(
      :checked => task_params[:checked]
    )
    
    respond_with(@task) do |format|
      format.json {render json: @task.as_json }
    end  
  end

  def destroy
  end

  def task_params
    params.require(:task).permit(:title, :details, :goal_date, :checked, :list_id, :id)
  end
end
