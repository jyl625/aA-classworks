require "towers_of_hanoi"

describe TowersOfHanoi do
  subject(:towers) { TowersOfHanoi.new }

  describe "#initialize" do
    it "should set @stacks to be a array of 3 subarrays" do
      expect(towers.stacks).to be_an(Array)
      expect(towers.stacks.length).to eq(3)
      # expect(towers.stacks.all?(&:is_a?(Array))).to be(true)
      expect(towers.stacks[0]).to be_an(Array)
      expect(towers.stacks[1]).to be_an(Array)
      expect(towers.stacks[2]).to be_an(Array)
    end

    it "should set disks in decreasing order on the first stack" do
      expect(towers.stacks[0]).to eq([4, 3, 2, 1])
    end
  end

  describe "#move" do
    it "should accept 2 arguments of starting stack number and final stack number" do
      expect { towers.move(0, 1) }.to_not raise_error
    end

    it "should remove top disk" do
      towers.move(0,1)
      expect(towers.stacks[0]).to eq([4, 3, 2])
    end

    it "should add the removed disk to a stack" do
      towers.move(0,1)
      expect(towers.stacks[1]).to eq([1])
    end
  end

  describe "#valid_move?" do
    it "should return true if disk being moved is placed on top of a larger disk" do
      towers.move(0,1)
      towers.move(0,2)
      expect(towers.valid_move?(1,2)).to eq true
    end

    it "should return false if disk being moved is placed on top of a smaller disk" do
      towers.move(0,1)
      towers.move(0,2)
      expect(towers.valid_move?(2,1)).to eq false
    end

    it "should raise error when start stack is empty" do
      expect { towers.valid_move?(1,2) }.to raise_error("No disk in start stack")
    end

    it "should raise error when start stack and end stack is same" do
      expect { towers.valid_move?(0,0) }.to raise_error("Start stack and end stack cannot be the same")
    end
  end

  describe "#won?" do
    it "should return false when there are more than one non-empty stack" do
      towers.move(0,1)
      expect(towers.won?).to eq false
    end

    it "should return true when there is only one non-empty stack" do
      # let(:towers_1) { double("towers_1", :stacks => [[], [4,3,2,1], []] ) }
      # towers_2 = TowersOfHanoi.new([[], [4,3,2,1], []])
      expect(towers.won?).to eq true
    end

  end


end