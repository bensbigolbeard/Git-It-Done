module ApplicationHelper
  def current_user_content(&block)
    capture(&block) if current_user
  end

  def visitor_content(&block)
    capture(&block) unless current_user
  end

  def randomized_background_image
    images = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg", "assets/6.jpg", "assets/7.jpg", "assets/8.jpg", "assets/9.jpg", "assets/10.jpg"]
    images[rand(images.size)]
  end
end
