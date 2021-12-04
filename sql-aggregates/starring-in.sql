select "name" as "genreName",
        count("genres"."name") as "numberOfGenres"
   from "genres"
  join "filmCategory" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
 where "actorId" = 178
 group by "genres"."name";
