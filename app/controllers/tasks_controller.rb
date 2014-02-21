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
    @task = Task.find(params[:id])
    if params[:checked] == true
      @task.update!(
        :checked => params[:checked]
      )
    end
    
    respond_with(@task) do |format|
      format.json {render json: @task.as_json }
    end  
  end

  def destroy
  end
end
