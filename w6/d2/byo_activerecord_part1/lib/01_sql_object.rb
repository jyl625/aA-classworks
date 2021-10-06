require_relative 'db_connection'
require 'active_support/inflector'
require 'byebug'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    if @column_names 
      @column_names
    else
      query_result = DBConnection.execute2(<<-SQL)
        SELECT
          *
        FROM
          #{self.table_name}
      SQL
      @column_names = query_result.first.map(&:to_sym)
    end
  end

  def self.finalize!

    self.columns.each do |column|
      define_method("#{column}") do
        attributes[column]
      end 

      define_method("#{column}=") do |value|
        attributes[column] = value
      end 
    end

  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    if @table_name 
      @table_name
    else
      "#{self}".tableize
    end
  end

  def self.all
    results = DBConnection.execute(<<-SQL)
      SELECT
        #{table_name}.*
      FROM
        #{table_name}
    SQL

    parse_all(results)
  end

  def self.parse_all(results)
    results.map { |result| self.new(result) }
  end

  def self.find(id)
    results = DBConnection.execute(<<-SQL)
      SELECT
        #{table_name}.*
      FROM
        #{table_name}
      WHERE
        #{table_name}.id = (?)
    SQL
  end

  def initialize(params = {})
    params.each do |attribute, val|
      attribute = attribute.to_sym
      if self.class.columns.include?(attribute)
        self.send("#{attribute}=", val)
      else
        raise "unknown attribute '#{attribute}'"
      end
    end
  end

  def attributes
    @attributes ||= Hash.new

    @attributes
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
