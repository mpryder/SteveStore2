class HomeController < ApplicationController
  def index
    #render :layout => "application" if !request.xhr?
    
     @products = Product.all

    respond_to do |format|
      format.html { render :layout => "application" if !request.xhr? }# index.html.erb
      format.json { render json: @products }
    end
  end
end
