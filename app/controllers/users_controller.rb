class UsersController < ApplicationController
  respond_to :json
  before_filter :authenticate_user!

  def show
    @user = current_user

    respond_with(@user) do |format|
      format.json {render json: @user.as_json }
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render action: 'show', status: :created, location: @user }
        redirect_to :back
      else
        format.html { render action: 'new' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @user = current_user
    respond_to do |format|
      if @user.update(user_params)
        format.json { head :no_content }
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :provider, :uid)
  end
end
