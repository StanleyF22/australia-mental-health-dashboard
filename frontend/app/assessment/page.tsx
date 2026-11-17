export function scorePHQ9(
    answers:number[]
) {

    const total =
    answers.reduce(
      (a,b)=>a+b,
      0
    );

    if(total <= 4) return "Minimal";

    if(total <= 9) return "Mild";

    if(total <= 14) return "Moderate";

    if(total <= 19) return "Moderately Severe";

    return "Severe";
}
