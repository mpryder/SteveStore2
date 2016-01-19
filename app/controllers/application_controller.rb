class ApplicationController < ActionController::Base
  protect_from_forgery
   
  layout "limited"
   
  private

  def layout   
     # turn layout off for every devise controller:
    !devise_controller? && "application"
  end
  
   
   def after_sign_in_path_for(resource)  
        "/myprofile" 
   end 
  
end
  
