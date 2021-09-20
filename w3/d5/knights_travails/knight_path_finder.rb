require "poly_tree_node"
class KnightPathFinder
  
  def self.valid_moves(pos)
    i, j = pos
    moves = [
      [i-1, j-2], [i-1, j+2], [i+1, j-2],[i+1, j+2],
      [i-2, j-1], [i-2, j+1], [i+2, j-1],[i+2, j+1]
    ]
    moves.select { |pair| pair.all? { |ele| ele.between(0, 7) }
  end

  attr_reader :considered_positions
  
  def initialize(starting_pos)
    @root_node = PolyTreeNode.new(starting_pos)
    @move_tree = build_move_tree
    @considered_positions = [starting_pos]
  end

  def new_move_positions(pos)
    new_positions = self.class.valid_moves(pos).reject do |pair|
      self.considered_positions.include?(pair)
    end

    @considered_positions += new_positions

    new_positions
  end

  def build_move_tree
  end

  def find_path(end_pos)
  end
end