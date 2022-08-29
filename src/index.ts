import { clientDemo } from "./data/dataAccess/db/postgres";

console.log('Init');

clientDemo().then( () => {
  console.log("Success");
  
})
.catch( (err) => {
  console.log(err);
  
});