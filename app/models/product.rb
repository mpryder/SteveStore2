class Product < ActiveRecord::Base
  attr_accessible :category, :description, :image_url, :make, :name, :price
  
end
