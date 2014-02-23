module ApplicationHelper
  def current_user_content(&block)
    capture(&block) if current_user
  end

  def visitor_content(&block)
    capture(&block) unless current_user
  end

  def randomized_background_image
    images = ["assets/1-86417158fad78d0a92ba8ec709b55862.jpg", "assets/2-9f55e694b4ac7e33501ad71b35ad400e.jpg", "assets/3-a3ef37402ece4519a941f7657be8775c.jpg", "assets/4-c5d520d5b2808fce201d18a046c0767e.jpg", "assets/5-fb63264745681dd841fa5917a56b40f9.jpg", "assets/79565b5077144453153337acb5d0b5234.jpg", "assets/8-fbec77dc1f26dbd32565bfde4559f3ee.jpg", "assets/9-1a06cf86992c7bc7e4f2e4619484959a.jpg", "assets/10-1156479ea281d527c6dfb3a8fda4894c.jpg"]
    images[rand(images.size)]
  end
end
