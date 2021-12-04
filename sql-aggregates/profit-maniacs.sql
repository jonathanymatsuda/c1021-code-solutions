select  "firstName",
        "lastName",
        sum("amount") as "totalAmount"
   from "payments"
  join "customers" using ("customerId")
 group by "customerId"
 order by "totalAmount" desc;
