class TowersOfHanoi

  attr_reader :stacks

  def initialize
    @stacks = Array.new(3) { Array.new }
    setup_stacks
  end

  def move(start_stack, end_stack)
    removed_disk = @stacks[start_stack].pop
    @stacks[end_stack].push(removed_disk)
  end

  def valid_move?(start_stack, end_stack)
    raise "No disk in start stack" if @stacks[start_stack].empty?
    raise "Start stack and end stack cannot be the same" if @stacks[start_stack] == @stacks[end_stack]
    @stacks[start_stack][-1] < @stacks[end_stack][-1]
  end

  def won?
    @stacks.one? { |stack| !stack.empty? }
  end

  def play
    start_stack, end_stack = nil, nil
    while !won? || (start_stack.nil?)
      start_stack, end_stack = get_player_input
      if valid_move?(start_stack, end_stack)
        move(start_stack, end_stack)
      else
        start_stack, end_stack = nil, nil
      end
    end
  end

  def get_player_input
    puts "Enter position separated by a comma 0,2"
    input = gets.chomp.split(',').map(&:to_i)
  end

  private

  def setup_stacks
    @stacks[0] = [4, 3, 2, 1]
  end

end


# needs initailize 
# @stacks (which will be an array of stacks), #3 stacks
# set up disks in decreasing order on stacks[0] #4 disks
# @stacks [ [4,3,2,1], [], [] ]

# three arrays for each stack
# create three disks to start off
# each stack takes in an integer

#move method to move the disks around
#won? method to see if the player wins
#get_input to get the input from player
#valid_move? - no bigger disk can be put on top of a smaller disk
