require "towers_of_hanoi"

describe TowersOfHanoi do
  subject(:towers) { TowersOfHanoi.new }

  describe "#initialize" do
    it "should set @stacks to be a array of 3 subarrays" do
      expect(towers.stacks).to be_an(Array)
      expect(towers.stacks.length).to eq(3)
      # expect(towers.stacks.all?(&:is_a?(Array))}).to be(true)
      expect(towers.stacks[0]).to be_an(Array)
      expect(towers.stacks[1]).to be_an(Array)
      expect(towers.stacks[2]).to be_an(Array)
    end

    it "should set disks in decreasing order on the first stack" do
      
    end
  end
end