require 'httparty'

get '/' do
  erb :login
end

get '/login' do
  client_id = "75d5633l2czc3k"
  redirect "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=#{client_id}&state=HSIEN45453sdffef424&redirect_uri=http://localhost:9393/logged_in"  
end

get "/logged_in" do
  code_response = params['code']
  client_id = "75d5633l2czc3k"
  p "SECRET_KEY"
  p ENV['SECRET_KEY']


  token_response = HTTParty.post( "https://www.linkedin.com/uas/oauth2/accessToken", body: {
    code: code_response,
    client_id: client_id,
    client_secret: ENV['SECRET_KEY'],
    redirect_uri: "http://localhost:9393/logged_in",
    grant_type: "authorization_code"
  })

  p "TOKEN RESPONSE"
  p token_response


  access_token = token_response["access_token"]
  p "ACCESS TOKEN"
  p access_token


  @linkedin_response = HTTParty.get("https://api.linkedin.com/v1/people/~?oauth2_access_token=#{access_token}")

  @linkedin_response

  @linkedin_response["person"]["first_name"]

  @user = User.find_or_create_by(access_token: access_token, name: @linkedin_response["person"]["first_name"])

  @user_id = @user.id

  erb :index
end


get '/game' do 
  erb :index
end
