# Prompts Log

This file stores all prompts written to the AI assistant during the development of the **Interactive Shipping Calculator** project, in chronological order.

---

## Prompt 1

> create PROMPTS.md file and store in it all prompts i write to you in this project

---

## Prompt 2

> create a theme file for MUI that contains all color schema and typography and shapes , than wrape the root app with mui provider passing the theme as its value
>
> take referance from https://fincart.io/

---

## Prompt 3

> create empty cursor rules file

---

## Prompt 4

> Let's plan for a new feature which is shipping calculator, where user insert his data through a mutlistep form (origin address, destination addresss, and Package Dimensions) and then it redirects to results page that contains a list of potential couriers in a style of a grid of cards each card contains data about the courier and price and delivery datae and time, this is an overview will give you details in incoming prompts

---

### Question Answer

**Question:** Where should the courier list and prices come from for the results page?

**Answer:** `mock_static` — a hardcoded list of Egyptian couriers with deterministic pricing, no backend.

**Question:** How should the multi-step form state persist between steps and into the results page?

**Answer:** the data should come from a Mock promise that return a static data that we will generate, but we need to do type validation handshake with zod

---

### Question Answer

**Question:** How should the 3-step form persist state between steps and into the results page?

**Answer:** the forms should be a in single route called /find-courier, and it should be muiltiple forms each step is its own from with navigation that the next button considered as a submit action and back button going to previous step toggling between steps (forms) is through `<activity>` that reacts provide to maintain previuos state of the form , and on each submit we should update a context that i will tell you about next

---

## Prompt 5

> great todo list, but remove first todo, zod resolver already exists insidereact hook form, and add a todo for the summary which will be in a sidebar containing data of the form after each step submit

---

## Prompt 6

> never mind just install the resolver package

---

## Prompt 7

> let's build

---

## Prompt 8

> switch to agent but don't move to another todo list without my confirmation

---

## Prompt 9

> skip first todo i did it myself and continue

---

## Prompt 10

> please recognise my rules in @.cursor/ you shouldn't create a feature directry

---

### Question Answer

**Question:** The rule says "never use default exports for components," but React Router 7 route modules require a default export. Which interpretation do you want?

**Answer:** `default_for_routes` — allow default exports only for route entry files (FindCourier.tsx, Results.tsx). Everything else stays named-exports.

---

## Prompt 11

> proceed

---

## Prompt 12

> import only from index pages

---

## Prompt 13

> change state in context to be a reducer

---

## Prompt 14

> proceed to next step

---

## Prompt 15

> remove heavy calcalutions and just add in schema totalbeforetax, tax, and total and add estimated delivery time

---

## Prompt 16

> while planning i did answer some questions you asked please add them in right order in @PROMPTS.md

---

## Prompt 17

> proceed to next step

---

## Prompt 18

> please keep in mind that i deleted al suggested seed calculation that you provided and i just went with simple mock data to be shown as is, please preceed to next step

---

## Prompt 19

> don't abstract one form for both origin and destination, do two seprate forms

---

## Prompt 20

> remove NumberField and use contoller on each field

---

## Prompt 21

> proceed

---

## Prompt 22

> please review the latest file changes you made, i made some manual changes and also in the @app/context/ShippingFormContext/ShippingFormContext.tsx file, and confirm with me

---

## Prompt 23

> let's proceed but before doing summary section let's wire find-courier route first so i can see results live

---

## Prompt 24

> proceed

---

## Prompt 25

> please remove edit button and make stepper only above the form card, and regarding code structure add helper functions (formatting) in a seperate helpers file and SummarySection component add it in global components folder

---

## Prompt 26

> proceed

---

## Prompt 27

> add summary in the results page

---

## Prompt 28

> don't copy it use it from find-courier feature

---

## Prompt 29

> proceed last step

---

## Prompt 30

> create a story with storybook for @app/routes/results/CouriersQuotesPage.tsx with success state and loading state and empty state

---
