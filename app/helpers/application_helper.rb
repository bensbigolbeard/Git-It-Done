module ApplicationHelper
  def current_user_content(&block)
    capture(&block) if current_user
  end

  def visitor_content(&block)
    capture(&block) unless current_user
  end

  def randomized_background_image
    images = ["assets/1-65b726fd202b510da78a95920cb700a3.jpg", "assets/2-b9fec92317ee123f1063c364874d439d.jpg", "assets/3-475e26ea5bbb6e4855ad4763ba375d0a.jpg", "assets/4-e757a45b9fc69b18057eb93705836486.jpg", "assets/5-aac87a420812511c5e17cea5e0447ba8.jpg", "assets/7-fda3e9b2cdd8ff0e6cb854088597eaf4.jpg", "assets/8-10eee685967f0a54b80dc61ec5fc4908.jpg", "assets/9-486f52e9a6a7e0a2db17969da8a5b0a5.jpg", "assets/10-fae21d9d8d45d816da68b0d5b3a1ef80.jpg"]
    images[rand(images.size)]
  end
end
