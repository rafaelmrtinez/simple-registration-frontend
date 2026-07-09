# Simple Registration Frontend

## Table of Contents

- [Simple Registration Frontend](#simple-registration-frontend)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Project Structure](#project-structure)
  - [Module Overview](#module-overview)
    - [App Shell](#app-shell)
    - [Registration Form](#registration-form)
    - [Registration Chart](#registration-chart)
    - [UI Components](#ui-components)
    - [Styling](#styling)
  - [Requirements](#requirements)
  - [Run Locally](#run-locally)
  - [Notes](#notes)

## Introduction

This frontend is a sample registration interface built for Kubernetes lab practice and local simulation. It is intended to demonstrate a realistic React application flow without the operational expectations of a production product.

The app presents a registration form, performs client-side validation, and shows a simple weekly registration chart. It is designed to be easy to containerize, easy to wire into a local cluster, and straightforward to extend during deployment exercises.

## Project Structure

The project uses Vite, React, and TypeScript. The source code is organized around a single page application with reusable UI primitives and two main feature components.

```text
src/
	App.tsx
	main.tsx
	index.css
	components/
		RegistrationForm.tsx
		RegistrationChart.tsx
		ui/
			...
	lib/
		utils.ts
```

The app has no backend calls in its current form. All behavior is handled in the browser, which keeps the sample self-contained for local practice.

## Module Overview

### App Shell

The top-level UI lives in [src/App.tsx](src/App.tsx). It keeps a small piece of state for the number of submitted registrations and passes that value to the chart component.

- `RegistrationForm` raises the count when a submission succeeds.
- `RegistrationChart` uses that count to adjust the last week in the sample dataset.
- The page is wrapped in a centered container with responsive spacing.

### Registration Form

The form is implemented in [src/components/RegistrationForm.tsx](src/components/RegistrationForm.tsx). It collects the following fields:

- first name
- last name
- username
- email address
- mobile number
- date of birth
- password
- confirm password

Validation happens entirely on the client. Required fields are marked, email addresses are checked against a basic pattern, mobile numbers are limited to digits, and passwords must be at least 8 characters long and match each other.

The form also includes:

- inline error messages that appear after a field has been touched
- a password visibility toggle
- a `+63` mobile prefix for the sample registration format
- a success state that appears after submission

Submitting the form does not send data to an API. Instead, it shows a confirmation message and updates the chart counter through the parent component.

### Registration Chart

The chart is implemented in [src/components/RegistrationChart.tsx](src/components/RegistrationChart.tsx). It uses Recharts to render a bar chart titled `Weekly Registrations`.

- The chart starts from a fixed sample dataset for eight weeks.
- The latest week is adjusted based on the number of successful form submissions.
- A custom chart container and tooltip are used for consistent styling.

This keeps the visual output dynamic while still remaining completely local and deterministic for lab practice.

### UI Components

Reusable UI primitives live under [src/components/ui](src/components/ui). These components provide the building blocks used by the form and chart cards.

Common pieces include:

- `Card` for surface layout
- `Button` for actions
- `Input` and `Textarea` for form controls
- `Label` for accessible field labels
- `Alert` for status or validation messaging
- `Spinner` and `Separator` for presentation and feedback
- `InputGroup` for composed fields such as the password control and mobile number prefix

These components are styled to work with the project’s Tailwind-based design system.

### Styling

Global styling is defined in [src/index.css](src/index.css). The app uses Tailwind CSS v4, `shadcn` styles, and the Inter variable font.

- Light and dark theme tokens are defined with CSS variables.
- The primary layout uses card-based surfaces with consistent border, radius, and spacing values.
- The theme is set up to work with the `bg-background`, `text-foreground`, and related utility classes used throughout the app.

The visual direction is intentionally clean and minimal so the frontend can be used in a lab environment without extra design complexity.

## Requirements

The project is built with the following main dependencies:

- `react` and `react-dom` for the UI runtime
- `typescript` for static typing
- `vite` for development and build tooling
- `tailwindcss` and `@tailwindcss/vite` for styling
- `recharts` for the weekly registrations chart
- `lucide-react` for icons
- `@base-ui/react` and the local shadcn-style components for accessible primitives

The app does not require a backend service to run in its current state.

## Run Locally

Install dependencies and start the Vite dev server:

```bash
npm install
npm run dev
```

Useful scripts from [package.json](package.json):

- `npm run dev` starts the development server.
- `npm run build` type-checks the project and produces a production build.
- `npm run lint` runs ESLint across the workspace.
- `npm run preview` serves the production build locally.

## Notes

- This frontend is intentionally lightweight and is meant for simulation, practice, and demonstration.
- The registration flow is client-side only and is not connected to a persistence layer.
- If you pair it with a backend during lab work, keep the UI behavior and the API contract aligned before introducing integration code.
