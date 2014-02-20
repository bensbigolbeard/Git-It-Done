class ListsController < ApplicationController
  respond_to :json

  def home

  end

  def index
    @lists = List.all
    
    respond_with(@lists) do |format|
      format.json {render json: @lists.as_json(:include => :tasks) }
    end
  end

  def show
    @list = List.find(params[:id])

    respond_with(@list) do |format|
      format.json {render json: @list.as_json(:include => :tasks)}
    end
  end

  def create
  end

  def delete
  end

  def update
  end
end
