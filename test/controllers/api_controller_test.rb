require "test_helper"

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get Listings" do
    get api_Listings_url
    assert_response :success
  end
end
