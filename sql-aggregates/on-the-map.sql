select "countries"."name" as "countryName",
        count("cityId") as "numberOfCities"
   from "countries"
  join "cities" using ("countryId")
 group by "countryId";
