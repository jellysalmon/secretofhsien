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
  # p "SECRET_KEY"
  # p ENV['SECRET_KEY']


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

  user = User.find_or_create_by(name: @linkedin_response["person"]["first_name"])

  redirect "/game/#{user.id}"
end


get '/game/:user_id' do 
  @user = User.find(params[:user_id])
  erb :index
end

post '/submit_score' do
  
  name = params[:name]
  new_score = params[:score]

  user = User.find_by_name(params[:name])
  

  
  if user.high_score < new_score.to_i 
    User.find_by_name(name).update_attribute(high_score, new_score)
  end
  
  {user: name, high_score: user.high_score}.to_json

end
