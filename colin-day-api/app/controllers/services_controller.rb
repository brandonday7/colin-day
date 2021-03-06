class ServicesController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
		response = Service.all.map {|s| {title: s.title, description: s.description}}
		render json: response, status: 200
	end

	def create
		@service = Service.new(service_params)
		if @service.save
			render json: {}, status: 200
		else
			response = {
				errors: @service.errors.full_messages
			}
			render json: response, status: 422
		end
		
	end

	private

	def service_params
	    params.permit(
	      :title,
	      :description
	    )
	 end
end
