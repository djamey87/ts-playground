nuSwitch Energy Comparison
Choosing an energy supplier is a difficult job. There are many suppliers with different plans and prices that vary by how much energy a customer consumes.
Your task is to help make the customer’s decision easier by writing a program that prices plans on the market according to how much energy is consumed
We’ll pair with you on this task, so it’s important that you talk us through your thought process and let us know if you’re stuck.
Please write your solution in a language you feel confident in. Your program should both produce the expected output and be well written.
Please do not publish your solution, for example on your blog or source control site.
Step 1: Pricing a plan
The data in an energy plan looks like this:
{
"supplier": "sse",
"plan": "standard",
"rates": [
{"price": 13.5, "threshold": 150},
{"price": 11.1, "threshold": 100},
{"price": 10}
],
"standing_charge": 9
}
Plans contain a set of rates that describe how much the customer will be charged for each kilowatt-hour (kWh) of energy that they use. Additionally, plans may also include a daily standing charge.
Plans may have more than one rate but all but the last rate will contain a threshold value. Rates are ordered and the last rate will always have no threshold. Thresholds indicate the quantity of energy (up to and including) that may be consumed at that price during the course of the year. Rates without a threshold have no limit.
In the example above, the first 150kWh will be charged at 13.5p/kWh, the next 100kWh will be charged at 11.1p/kWh and all subsequent consumption will be charged at 10p/kWh.
Note that:
• Prices are stated in pence and are exclusive of VAT.
• Standing charge is a daily charge stated in pence exclusive of VAT and is applied regardless of consumption.
• VAT for Energy is rated at 5%.
For the first part of this exercise, we would like you to write a function that takes in a plan and an annual usage amount (in kWh) and returns what a customer would be charged annually (in pounds, including VAT).
Step 2: Output
In the next stages of this exercise, we’ll be handling multiple plans, and multiple different usage amounts. Your program will need to be able to format the output to be easily readable.
In this step, you should extend your program to log out the price of a plan in the format SUPPLIER,PLAN,TOTAL_COST. TOTAL_COST should be in pounds, include VAT, and be given to two decimal places.
1
For the example plan above, when a consumer uses 1000 kWH your program should log out: sse,standard,146.16
Note that all rounding should be natural (i.e. 1.045 rounded to 2 decimal places is 1.05).
Step 3: Load plans from a file
Energy providers send new plans to us on a regular basis. In this step, we would like you to extend your program to load plans from a file. Your interviewer will provide you with a json file containing a list of plans.
Your program should take a single command line argument - the path of the file - and should log the price of each plan in the format above, assuming a usage of 1000 kWh.
For example, I should be able to run
$ uswitch plans.json
sse,standard,146.16
Step 4: Take input from stdin
Different customers use different amounts of energy - we need to be able to tell the customer the price of each plan according to their own usage. In this step we would like you to extend your program to take input from stdin. It should accept two commands:
• price ANNUAL_USAGE
For a given annual kWh consumption produces an annual inclusive of VAT price for all plans available on the market sorted by cheapest first and prints to stdout. Each plan will be printed on its own line in the format SUPPLIER,PLAN,TOTAL_COST. Total cost should be rounded to 2 decimal places, i.e. pounds and pence.
• exit Leaves the program.
So, for example, I should be able to run the program as follows:
$ uswitch plans.json
price 1000
sse,standard,146.16
price 1200
sse,standard,167.16
exit
