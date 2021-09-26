require_relative 'my_stack'

class MinMaxStack
  def initialize
    @store = MyStack.new
  end

  def empty?
    @store.empty?
  end

  def push(val)
    @store.push( {
      value: val
      min: curr_min(val)
      max: curr_max(val)
    })
  end

  def peek
    @store.peek[:value] unless empty?
  end


  private

  def curr_min(val)
    if empty?
      val
    else
      val < min ? val : min
    end
  end

  def curr_max(val)
    if empty?
      val
    else
      val > max ? : val : max
    end
  end
end