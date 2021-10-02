# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#
#  movie_id    :integer      not null, primary key
#  actor_id    :integer      not null, primary key
#  ord         :integer

require_relative './sqlzoo.rb'

def example_join
  execute(<<-SQL)
    SELECT
      *
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Sean Connery'
  SQL
end

def ford_films
  # List the films in which 'Harrison Ford' has appeared.
  execute(<<-SQL)
    SELECT
      title
    FROM
      actors
    JOIN
      castings ON actors.id = castings.actor_id
    JOIN
      movies ON castings.movie_id = movies.id
    WHERE
      actors.name = 'Harrison Ford'
  SQL
end

def ford_supporting_films
  # List the films where 'Harrison Ford' has appeared - but not in the star
  # role. [Note: the ord field of casting gives the position of the actor. If
  # ord=1 then this actor is in the starring role]
  execute(<<-SQL)
   SELECT
      movies.title
    FROM
      actors
    JOIN
      castings ON actors.id = castings.actor_id
    JOIN
      movies ON castings.movie_id = movies.id
    where
      actors.name = 'Harrison Ford' AND castings.ord != 1
  SQL
end

def films_and_stars_from_sixty_two
  # List the title and leading star of every 1962 film.
  execute(<<-SQL)
    SELECT
      movies.title, actors.name
    FROM
      actors
    JOIN
      castings ON actors.id = castings.actor_id
    JOIN
      movies ON castings.movie_id = movies.id
    where
      movies.yr = 1962 AND castings.ord = 1
  SQL
end

def travoltas_busiest_years
  # Which were the busiest years for 'John Travolta'? Show the year and the
  # number of movies he made for any year in which he made at least 2 movies.
  execute(<<-SQL)
    SELECT
      jt_movies.yr, COUNT(jt_movies)
    FROM
      (SELECT
        movies.title, movies.yr
      FROM
        actors
      JOIN
        castings ON actors.id = castings.actor_id
      JOIN
        movies ON castings.movie_id = movies.id
      WHERE
        actors.name = 'John Travolta') AS jt_movies
    GROUP BY
      jt_movies.yr
    HAVING
      COUNT(jt_movies.yr) >= 2
  SQL
end

def andrews_films_and_leads
  # List the film title and the leading actor for all of the films 'Julie
  # Andrews' played in.
  execute(<<-SQL)
    SELECT
      movies.title, actors.name
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      castings.ord = 1 AND movies.title IN
        (SELECT
          movies.title
        FROM
          movies
        JOIN
          castings ON movies.id = castings.movie_id
        JOIN
          actors ON castings.actor_id = actors.id
        WHERE
          actors.name = 'Julie Andrews')
    
  SQL
end

def prolific_actors
  # Obtain a list in alphabetical order of actors who've had at least 15
  # starring roles.
  execute(<<-SQL)
    SELECT
      pro_actors.name
    FROM
      (
        SELECT
          *
        FROM
          movies
        JOIN
          castings ON movies.id = castings.movie_id
        JOIN
          actors ON castings.actor_id = actors.id
        WHERE
          castings.ord = 1
      ) AS pro_actors
    GROUP BY
      pro_actors.name
    HAVING
      COUNT(pro_actors.movie_id) >= 15
    ORDER BY
      pro_actors.name
  SQL
end

def films_by_cast_size
  # List the films released in the year 1978 ordered by the number of actors
  # in the cast (descending), then by title (ascending).
  execute(<<-SQL)
    SELECT
      target_movies.title, COUNT(target_movies.actor_id)
    FROM
      (
        SELECT
          title, actor_id
        FROM
          movies
        JOIN
          castings on movies.id = castings.movie_id
        WHERE
          yr = 1978
      ) AS target_movies
    GROUP BY
      target_movies.title
    ORDER BY
      COUNT(target_movies.actor_id) DESC, target_movies.title ASC
    
    
    
  SQL
end

def colleagues_of_garfunkel
  # List all the people who have played alongside 'Art Garfunkel'.
  execute(<<-SQL)
    SELECT
      name
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      name != 'Art Garfunkel' AND title IN 
        (
          SELECT
            title
          FROM
            movies
          JOIN
            castings ON movies.id = castings.movie_id
          JOIN
            actors ON castings.actor_id = actors.id
          WHERE
            name = 'Art Garfunkel'
        )
  SQL
end
