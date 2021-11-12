class TodoItem < ApplicationRecord
  validates :title, :body, presence: true
  validates :done, inclusion: {in: [true, false]}

  #has many steps
end
