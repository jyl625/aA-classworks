
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



list = [5, 3, -7]
p largest_contiguous_subsum(list) # => 8

list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

list = [-5, -1, -3]
p largest_contiguous_subsum(list) # => -1 (from [-1])