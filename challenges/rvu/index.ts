// incoming data model:
// {
//   title: "nUswitch Plan Model";
//   description: "JSON Schema description of a nuSwitch plan";
//   type: "object";
//   properties: {
//     supplier: { type: "string" };
//     plan: { type: "string" };
//     standing_charge: { type: "integer"; minimum: 0 };
//     rates: {
//       type: "array";
//       items: {
//         type: "object";
//         properties: {
//           price: { type: "number"; minimum: 0 };
//           threshold: { type: "integer"; minimum: 1 };
//         };
//         required: ["price"];
//       };
//     };
//   };
//   required: ["rates", "supplier", "plan"];
// };

type Rate = {
  price: number;
  threshold?: number;
};

type Plan = {
  plan: string;
  supplier: string;
  standing_charge: number;
  rates: Rate[];
};

const VAT_PERCENTAGE = 5;

const mockPlan = {
  supplier: "sse",
  plan: "standard",
  rates: [
    { price: 13.5, threshold: 150 },
    { price: 11.1, threshold: 100 },
    { price: 10 },
  ],
  standing_charge: 9,
};

// function loadFile(filePath: string) {
//   plans.map(() => init(planId, plan, annualAmount));
// }

function init(plan, annualAmount) {
  // console.log("Hello world", plan, annualAmount);

  let cost = 0;
  let remainingAmount = annualAmount;

  plan.rates.forEach((rate) => {
    if (remainingAmount - rate.threshold > 0) {
      // remaining amount change
      if (Object(rate).hasOwnProperty("threshold")) {
        const rateCharge = rate.price * rate.threshold;
        cost += rateCharge;
        remainingAmount -= rate.threshold;
      } else {
        // whatevers left * price
        cost += remainingAmount * rate.price;
      }
    } else {
      // ignore rest
      cost += remainingAmount * rate.price;
      remainingAmount = 0;

      return;
    }
  });

  const totalStandingCharge = plan.standing_charge * 365;
  cost += totalStandingCharge;

  const withVAT = cost * 1.05;
  const costInPounds = withVAT / 100;

  const costRounded = Math.round(costInPounds * 100) / 100;

  // add on VAT
  console.log(`${plan.supplier},${plan.plan},${costRounded}`);
}

init(mockPlan, 1000);
init(mockPlan, 100);
// (1350 + 3285) * 1.05
