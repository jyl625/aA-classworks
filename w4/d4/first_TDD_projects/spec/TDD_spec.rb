require "TDD"

describe "#my_uniq" do
  subject(:arr) { [1,2,1,3,3] }

  it "Takes in an array as an argument" do
    expect {my_uniq(arr) }.to_not raise_error
  end

  it "returns a new array with unique values" do
    expect(my_uniq(arr)).to eq(arr.uniq)
  end
end


describe "Array#two_sum" do 
  subject(:arr) { [-1, 0, 2, -2, 1] }

  it "Takes in an array as an argument" do
    expect { arr.two_sum }.to_not raise_error
  end

  it "Finds 0 sum pair" do
    expect(arr.two_sum).to eq([[0, 4], [2, 3]])
  end
end


describe "#my_transpose" do
  subject(:rows) { 
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]]
    }

  it "Takes in an array as an argument" do
    expect {my_transpose(rows) }.to_not raise_error
  end

  it "Transposes a 2D array" do
    expect(my_transpose(rows)).to eq(rows.transpose)
  end
end

describe "#stock_picker" do
  subject(:prices) { [5, 12, 8, 1, 16, 10, 3, 2, 4, 18] }

  it "Takes in an array as an argument" do
    expect {stock_picker(prices) }.to_not raise_error
  end

  it "Returns pair of days on which to buy and sell the stock for the most profit" do
    expect(stock_picker(prices)).to eq([3, 9])  
  end
end