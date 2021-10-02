# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

def example_sum
  execute(<<-SQL)
    SELECT
      SUM(population)
    FROM
      countries
  SQL
end

def continents
  # List all the continents - just once each.
  execute(<<-SQL)
    SELECT DISTINCT
      continent
    from 
      countries
  SQL
end

def africa_gdp
  # Give the total GDP of Africa.
  execute(<<-SQL)
    SELECT
      SUM(gdp)
    FROM
      countries
    GROUP BY 
      continent
    HAVING
      continent = 'Africa'
  SQL
end

def area_count
  # How many countries have an area of more than 1,000,000?
  execute(<<-SQL)
    SELECT
      COUNT(*)
    FROM
      countries
    WHERE
      area > 1000000
  SQL
end

def group_population
  # What is the total population of ('France','Germany','Spain')?
  execute(<<-SQL)
    SELECT
      SUM(population)
    FROM
      countries
    WHERE
      name = 'France' OR name = 'Germany' OR name = 'Spain'
  SQL
end

def country_counts
  # For each continent show the continent and number of countries.
  execute(<<-SQL)
    SELECT
      continent, COUNT(name)
    FROM
      countries
    GROUP BY
      continent
  SQL
end

def populous_country_counts
  # For each continent show the continent and number of countries with
  # populations of at least 10 million.
  execute(<<-SQL)
    SELECT
      continent, COUNT(*)
    FROM
      (
        SELECT 
          *
        FROM
          countries
        WHERE
          population >= 10000000
      ) AS big_countries
    GROUP BY
      continent
    
  SQL
end

def populous_continents
  # List the continents that have a total population of at least 100 million.
  execute(<<-SQL)
    SELECT
      continent
    FROM
      (
        SELECT
          SUM(population), continent
        FROM
          countries
        GROUP BY
          continent
      ) AS continent_pops
    WHERE
      sum > 100000000
  SQL
end
