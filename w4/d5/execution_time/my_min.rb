#phase I

def my_min(list)
  (0..list.length-1).each do |i|
    k = 0
    (0..list.length-1).each do |j|
      k = j
      break if list[i] > list[j]       
    end
    min_value = list[i] if k == list.length - 1
  end
  min_value
end

# def my_min(list)
#   list.each do |ele_1|
#     return ele_1 if list.all? { |ele_2| ele_1 <= ele_2 }
#   end
# end


list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min(list)  # =>  -5