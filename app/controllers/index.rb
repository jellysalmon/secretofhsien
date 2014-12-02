get '/' do
  client_id = "75d5633l2czc3k"
  redirect "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=#{client_id}&state=BOOGIE45453sdffef424&redirect_uri=http://localhost:9393/logged_in&scope=r_fullprofile"
end

get "/logged_in" do
  params

  code_response = params['code']
  client_id = "75d5633l2czc3k"


  token_response = HTTParty.post( "https://www.linkedin.com/uas/oauth2/accessToken", body: {
    code: code_response,
    client_id: client_id,
    client_secret: ENV['SECRET_KEY'],
    redirect_uri: "http://localhost:9393/",
    grant_type: "authorization_code"
    })


  access_token = token_response["access_token"]



 @linkedin_response = HTTParty.get("https://api.linkedin.com/v1/people/~?oauth2_access_token=#{access_token}")

 p @linkedin_response

 p @linkedin_response["person"]["first_name"]

  User.create(access_token: access_token, name: @linkedin_response["person"]["first_name"])

 erb :index
end
