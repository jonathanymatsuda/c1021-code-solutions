select "releaseYear",
       "genres"."name" as "genreName"
  from "films"
 join "filmCategory" using ("filmId")
 join "genres" using ("genreId")
 where "title" = 'Boogie Amelie';
