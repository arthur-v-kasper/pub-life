class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :pub_id
end
