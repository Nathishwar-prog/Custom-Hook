
# Live Link [[https://task5mern.netlify.app/]]

This project demonstrates how to create a custom React Hook called useFetch that simplifies fetching data from any API.
It helps handle loading, error, and data states in a clean and reusable way.

The project also includes a simple UI that displays product data fetched from a dummy API endpoint.

# Objectives

Understand and implement custom hooks in React.

Simplify the process of fetching data using fetch().

Manage states like loading, error, and data efficiently.

Build a clean and reusable structure for API calls.

# Features

1 Reusable useFetch hook
2 Handles loading and error states
3 Fetches and displays product data dynamically
4 Uses useState, useEffect, and useCallback hooks
5 Responsive and modern UI with basic styling
6 Easily adaptable to any API endpoint

# Design Decisions

1 Custom Hook (useFetch):

Keeps API logic separate from UI components.

Can be reused in multiple parts of the app.

2 Error Handling:

Detects both network and server response errors.

3 Loading Management:

Displays a loading message while data is being fetched.

4 Performance Optimization:

I Used useCallback to avoid unnecessary re-renders.

Flexibility:

Works with any API URL by simply passing a new endpoint.
