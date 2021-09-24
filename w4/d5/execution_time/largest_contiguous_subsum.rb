require 'byebug'

#phase I1

def  largest_contiguous_subsum(list)
    subarrays = []
    (0...list.length).each do |idx1|
        (idx1...list.length).each do |idx2|
            subarrays << list[idx1..idx2]
        end
    end

    subarrays.map(&:sum).max
end


# def largest_contiguous_subsum(list, current_sum = -9999999, largest_sum = -9999999 )
#   # debugger
#   return list.first if list.length == 1

#   current_sum = list.last
#   left_sum = largest_contiguous_subsum(list[0...-1], current_sum, largest_sum)

#   current_sum = list.first
#   right_sum = largest_contiguous_subsum(list[1..-1], current_sum, largest_sum)

#   if left_sum + current_sum > left_sum
#     current_sum = left_sum + current_sum 
#   else
#     current_sum = right_sum + current_sum
#   end

#   largest_sum > current_sum ? largest_sum : current_sum

# end

def largest_contiguous_subsum(list)
    # debugger
    largest_sum = -99
    cur_sum = list.shift
    sub_arr = [cur_sum]
    list.each do |a|
        cur_sum += a
        sub_arr << a
        if sub_arr.length >= 1 && cur_sum - sub_arr.first > cur_sum
          cur_sum = cur_sum - sub_arr.first
          sub_arr.unshift(a)
        end
        largest_sum = cur_sum if cur_sum > largest_sum
    end
    largest_sum
end

def largest_contiguous_subsum(list)
  # debugger
  largest_sum = list.sum
  current_sum = largest_sum

  i = 0
  until current_sum > largest_sum || i == list.length
    current_sum -= list[i]
    i += 1

    largest_sum = current_sum if current_sum > largest_sum
  end

  largest_sum = current_sum

  j = list.length - 1
  until current_sum > largest_sum || j < 0
    current_sum -= list[j]
    j -= 1

    largest_sum = current_sum if current_sum > largest_sum
  end

  current_sum
end


list = [5, 3, -7]
p largest_contiguous_subsum(list) # => 8

list = [2, 3, -6, 7, -6, 7, 1]
p largest_contiguous_subsum(list) # => 9 (from [7, -6, 7, 1])

list = [-5, -1, -3]
p largest_contiguous_subsum(list) # => -1 (from [-1])