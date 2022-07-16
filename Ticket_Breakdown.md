# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Let customers to add custom id for agents

As a user I want to be able to saving my agents custom ids' and using seeing them in the reports. Adding this field to agents' profile page and would be great.

**Designs**
[Android](...)
[IOS](...)
[Web](...)

**Technical Description**

- Adding a new field to the Agents table should be enough for us to achieve this.

**Estimated time**
4-6hrs

**Acceptance criteria**

- I should be able to add/remove or update the custom id for the agents in their profile

### Adding hours info to the reports

As a user I want to see how many hours did my agents work this quarter.

**Technical Description**

- This can be achiaved by updating `generateReport` function which already has the shift info returned by `getShiftsByFacility`

- Also another approach would be getting this information by another SQL query that will SUM the total hours. This way application layer will not be blocked as much as the first solution.

**Estimated time**
4-6hrs

**Acceptance criteria**

- I should see the how many hours a individual agent did work this year
- It would be better if the approach will be done with second solution
