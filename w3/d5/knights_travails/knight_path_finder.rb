require "poly_tree_node"
class KnightPathFinder
  def self.valid_moves(pos)
    
  end

  def initialize(starting_pos)
    @root_node = PolyTreeNode.new(starting_pos)
    @move_tree = build_move_tree
  end

  def build_move_tree
  end

  def find_path(end_pos)
  end
end