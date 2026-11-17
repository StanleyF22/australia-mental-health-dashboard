export function detectCrisis(
  message:string
){

const keywords = [
  "suicide",
  "kill myself",
  "self harm"
];

return keywords.some(
 x => message
 .toLowerCase()
 .includes(x)
);

}
