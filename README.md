Practical Exercise – Dashboard Tabs with React Query

🧩 Goal

Build a small Next.js page that contains:
- 2 tabs
  - Characters
  - Locations
- Each tab fetches data from the Rick & Morty API  
  https://rickandmortyapi.com/documentation
- Display a simple styled card per item (no pagination required)
- Avoid unnecessary refetching when switching tabs

This exercise is meant to simulate a small feature inside a dashboard-style application.

⸻

⚙️ Technical Stack

Please use:
- Next.js (pages router)
- TypeScript
- styled-components
- Axios
- @tanstack/react-query (v5)

⸻

📄 Functional Requirements

1. Tabs
   - Two tabs: Characters and Locations
   - Switching tabs should:
     - Not reload the page
     - Not refetch data if it was already loaded

Keep the UI simple — we are not evaluating design skills.

⸻

3. Locations Tab

Fetch from:

```
GET https://rickandmortyapi.com/api/location
```

Display a simple card per character showing:
- Image
- Name
- Status
- Species

⸻

3. Locations Tab

Fetch from:

```
GET https://rickandmortyapi.com/api/location
```

Display a simple card per location showing:
- Name
- Type

⸻

🎨 Styling
- Use styled-components
- Keep styles simple
- No need for responsiveness, animations, or advanced layout

⸻

🧠 What We’re Evaluating

This is not about perfection or pixel accuracy. We would like to understand your thinking and how you work.

You don’t need to overengineer the solution.

Keep it clean, readable, and maintainable.

⸻

🚫 What Is Not Required
- No pagination
- No filtering
- No authentication

⸻

📦 Deliverables

Please provide: 1. A Git repository (public or shared access) 2. A short section in this README explaining: 3. Any tradeoffs you made 4. What you would improve if this were production code

⸻

🤖 AI Usage Disclosure

You are allowed to use AI tools.

If you used any AI tool during development, please specify in this README:
- Which tool you used (e.g., ChatGPT, Copilot, etc.)
- For what purpose (e.g., scaffolding, debugging, typing interfaces, etc.)
- Why you chose to use it

We are not judging AI usage negatively.
We want transparency and to understand how you integrate tools into your workflow.

⸻

⏱ Time Expectation

Please don’t spend excessive time polishing details.
We are more interested in how you approach the problem than in a perfect final result.

⸻

💬 Notes

If any requirement is unclear, make reasonable assumptions and document them in this README.

Clarity of thinking is more important than completeness.

---

## Delivery Notes

### Assumptions and Trade-offs

I treated the required stack as mandatory, approaching the exercise as if joining a project with a pre-defined tech stack where the goal is to deliver within those constraints.

That said, there are clear trade-offs worth calling out:

- **Pages Router** is in maintenance mode. New Next.js features and optimizations target the App Router exclusively.
- **styled-components** is no longer actively maintained. It still works, but the ecosystem has moved on.
- **React Query v5** is solid on its own, but in a Next.js context much of what it provides (caching, deduplication) can be handled natively by the framework, especially under the App Router model.

None of these blocked delivery, but they shaped some of the decisions below.

### Development Approach

I structured the work in **small, meaningful commits**. This makes it straightforward to review the progression of the solution, I consider this a baseline practice for any project, regardless of scale.

### Production Improvements

If this were headed to production, I would plan to:

- Define a **branching strategy** (e.g., Git Flow or trunk-based development) with protected branches and pull request reviews.
- Set up a **CI/CD pipeline** to automate linting, testing, building, and deployment on every push.
- Migrate to **App Router** and leverage its built-in data fetching and caching.
- Replace styled-components with **CSS Modules** or the styling solution Next.js ships with (styled-jsx), to reduce maintenance risk.
- Update all dependencies to their latest stable versions.
- Reorganize the codebase into a **feature-based architecture** instead of the current type-based layout.
- Add **Husky + lint-staged** to enforce linting and formatting on every commit.
- Extract common UI components into a shared library and document them with **Storybook**.
- Add **unit and integration tests** (React Testing Library and Playwrigth).
- Adopt a **headless component library** (e.g., Radix UI, React Aria) to handle the accessibility layer with unstyled primitives. This would require evaluating a refactor of existing components, but it is especially worthwhile at an early project stage like this one.

### AI Usage

I used **Cursor** (AI-assisted editor) during development. Specifically:

- **Boilerplate generation**: when I had a good reference article or repo example (ie: https://github.com/alan2207/bulletproof-react/tree/master/apps/nextjs-pages), I used Cursor to implement it rather than copying it manually.
- **Type generation**: I fed API response samples to generate the initial TypeScript interfaces.
- **Documentation drafting**: the first pass of this delivery section was drafted from an audio transcript.
- **Accessibility audit**: quick review of all components to identify simple a11y improvements.

In a production environment I would incorporate **Claude Code** into the workflow for its persistent project context, which improves substantially as it learns the codebase over time.