def my_uniq(arr)
  hash = {}
  arr.each { |ele| hash[ele] = true }
  hash.keys
end

class Array
  def two_sum
    result = []
    (0...self.length).each do |i|      #self.each_index do |i|
      (i+1...self.length).each do |j|
        result << [i, j] if self[i] + self[j] == 0
      end
    end
    result
  end
end


def my_transpose(arr)
  result = []
  arr.each_index do |i| # i = 4
    sub_arr = []
    arr[i].each_index do |j| #j = 0
      sub_arr << arr[j][i]
    end
    result << sub_arr
  end
  result
end

# def my_transpose(arr)
#   row = arr.length
#   col = arr[0].length
#   result = Array.new(col) { Array.new(row) }

#   arr.each_index do |i|
#     arr[0].each_index do |j|
#       result[j][i] = arr[i][j]
#     end
#   end

#   result
# end

def stock_picker(arr)
  max_buy_date = 0
  max_sell_date = 0
  arr.each_index do |buy|
    (buy+1...arr.length).each do |sell|
      if arr[sell] - arr[buy] > arr[max_sell_date] - arr[max_buy_date]
        max_buy_date, max_sell_date = buy, sell
      end
    end
  end
  [max_buy_date, max_sell_date]
end


