require "sinatra"
require "erb"
require_relative "pairs_picker_methods.rb"

enable :sessions



get "/" do 
	session[:message] = "Thanks for bringing people together!"
	session[:names] = []
	erb :new
end


post "/pairs" do
	name = params[:name]
	session[:names] << name
	erb :new
end


get "/show_pairs" do
	if session[:names].length == 1
		session[:message] = "You will need at least 2 people for a pairing..."
		redirect "/try_again"
	end
	session[:names] = shuffle(session[:names])
	session[:pairs] = return_pairs(session[:names])
	erb :show_pairs
end

get "/try_again" do 
	erb :new
end

post "/bad_pairs" do
	session[:bad_pairs] = params[:bad_pairs]

	if session[:bad_pairs] == nil
		redirect "/show_pairs"
	end

#convert the "stringified" array to normal array
	new_array = Array.new 

	session[:bad_pairs].each do |pair|
		pair = eval(pair)
		new_array.push(pair)
	end	

	session[:bad_pairs] = new_array
#delete bad pairs from good pairs
	session[:bad_pairs].each do |bad|
	session[:pairs].each do |good|
		
			if good == bad
				session[:pairs].delete(bad)
			end
		end

	end

# randomize "bad pairs"
# first need to convert bad_pairs to array of names
	people_array = Array.new
	session[:bad_pairs].each do |bad_pair|
		bad_pair.each do |name|
			people_array.push(name)
		end
	end

# Now, shuffle and re-pair the "bad pairs"
	people_array = shuffle(people_array)
	new_pairs = return_pairs(people_array)

# Now, push those new pairs back into the original pairs array
	new_pairs.each do |np|
		session[:pairs].push(np)
	end


	redirect "/new_pairs"
end

get "/new_pairs" do
	erb :show_pairs
end