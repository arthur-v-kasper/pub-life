module Api
  module V1
    class PubsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        pubs = Pub.all

        render json: PubSerializer.new(pubs, options).serialized_json
      end

      def show
        pub = Pub.find_by(slug: params[:slug])

        render json: PubSerializer.new(pub, options).serialized_json
      end

      def create
        pub = Pub.new(pub_params)

        if pub.save 
          render json: PubSerializer.new(pub).serialized_json
        else 
          render json: { error: pub.errors.messages }, status: 422
        end  
      end

      def update
        pub = Pub.find_by(slug: params[:slug])

        if pub.update(pub_params) 
          render json: PubSerializer.new(pub, options).serialized_json
        else 
          render json: { error: pub.errors.messages }, status: 422
        end  
      end

      def destroy
        pub = Pub.find_by(slug: params[:slug])

        if pub.destroy
          head :no_content
        else 
          render json: { error: pub.errors.messages }, status: 422
        end  
      end

      private
      def pub_params
        params.require(:pub).permit(:name, :image_url)
      end

      def options
        @options ||= { include: %i[reviews] }
      end
    end
  end
end
