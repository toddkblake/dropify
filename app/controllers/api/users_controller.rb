class Api::UsersController < ApplicationController
  def index
    @users = User.all.includes(:followers, :followed_users, :playlists, :followed_playlists)
    render "api/users/index"
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: { base: ["User not found"] }, status: 404
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: { base: @user.errors.full_messages }, status: 422
    end
  end

  def update
    if params.include?(:follow)
      @follow = Follow.find_by(
        follower_id: params[:follow][:follower_id],
        followable_id: params[:follow][:followable_id],
        followable_type: params[:follow][:followable_type]
      )
      if @follow
        @follow.destroy!
        render "api/follows/show"
      else
        render json: { base: ["Follow does not exist"] }, status: 422
      end
    else
      @user = User.find(params[:id])
      if @user.update(user_params)
        render "api/users/show"
      else
        render json: { base: @user.errors.full_messages }, status: 422
      end
    end
  end
end
