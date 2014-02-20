class ListsController < ApplicationController
  respond_to :json

  def index
    @lists = List.all
    
    # respond_with(@lists) do |format|
    #   format.json {render json: @lists.as_json(:include => :tasks) }
    # end
  end

  def create
  end

  def delete
  end

  def update
  end
end
