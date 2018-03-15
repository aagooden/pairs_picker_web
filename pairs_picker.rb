require "sinatra"
require "erb"

enable :sessions

def shuffle(people)
	people = people.shuffle
	return people
end


def return_pairs(people)
	people = shuffle(people)
	pairs_array = []
	num = people.length / 2

	for x in (0...num)
		pairs_array.push(people.slice(x * 2, 2))
	end

	if people.length % 2 != 0
		pairs_array[pairs_array.length - 1].push(people.last)
	end

	return pairs_array
end



	get "/pairs" do 
		session[:names] = []
		erb :new
	end


	post "/pairs" do
		name = params[:name]
		session[:names] << name
		erb :new
	end


	get "/show_pairs" do
		# @pairs = File.read("names.txt").split("\n")
		# @pairs = return_pairs(@pairs)
		@people = session[:names]
		@pairs = return_pairs(@people)
		erb :show_pairs
	end

