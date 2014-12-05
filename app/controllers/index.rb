require 'httparty'

get '/' do
  erb :login
end

get '/login' do
  client_id = ENV['CLIENT_ID']
  redirect "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=#{client_id}&state=HSIEN45453sdffef424&redirect_uri=https://calm-earth-8611.herokuapp.com/logged_in"  
end

get "/logged_in" do
  code_response = params['code']
  
  # p "SECRET_KEY"
  # p ENV['SECRET_KEY']


  token_response = HTTParty.post( "https://www.linkedin.com/uas/oauth2/accessToken", body: {
    code: code_response,
    client_id: ENV['CLIENT_ID'],
    client_secret: ENV['SECRET_KEY'],
    redirect_uri: "https://calm-earth-8611.herokuapp.com/logged_in",
    grant_type: "authorization_code"
  })

  access_token = token_response["access_token"]

  @linkedin_response = HTTParty.get("https://api.linkedin.com/v1/people/~?oauth2_access_token=#{access_token}")

  user = User.find_or_create_by(name: @linkedin_response["person"]["first_name"])

  session[:user.id]
  redirect "/game/#{user.id}"
end


get '/game/:user_id' do 
  @users = User.order('high_score DESC').limit(5)
  @user = User.find(params[:user_id])
  erb :index
end

post '/submit_score' do
  
  name = params[:name]
  new_score = params[:score]

  user = User.find_by_name(params[:name])
  
  
  

  # user.name
  # user.high_score
  
  if user.high_score < new_score.to_i 
    user.update_attribute("high_score", new_score)
  end
  
  user_data_array = []
  all_users = User.all
  all_users.to_json
  
  all_users.each do |user| 
    user_hash = {}
    user_hash[:name] = user[:name]  
    user_hash[:high_score] = user[:high_score]
    user_data_array.push(user_hash)
  end 
  
  user_data_array.to_json

  # {user: name, high_score: user.high_score}.to_json

end
