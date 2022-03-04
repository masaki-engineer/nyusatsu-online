class Api::V1::Company::RegistrationsController < DeviseTokenAuth::RegistrationsController
  private

  def sign_up_params
    params.permit(
      :email,
      :password,
      :password_confirmation,
      :name,
      :postal_code,
      :prefecture_id,
      :city,
      :addresses,
      :building,
      :phone_number,
      :industry_id,
      :home_page_url
    )
  end
end
