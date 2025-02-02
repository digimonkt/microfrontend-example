# Microfrontend Example Setup

This project is an example setup of a microfrontend architecture.

## Overview

Microfrontends are a design approach in which independently deliverable frontend applications are composed into a greater whole. This project demonstrates how to set up a basic microfrontend architecture.

## Features

- **Component Sharing**: Components are shared across different microfrontends.
- **State Sharing**: State sharing is not yet implemented and remains as a task.

## Project Structure

The project is organized as follows:

```
/e:/Examples/Microfrontend/
├── app1/
│   ├── src/
│   └── ...
├── app2/
│   ├── src/
│   └── ...
└── readme.md
```

- `app1/` and `app2/` are individual microfrontend applications.

## Getting Started

To get started with the project, follow these steps:

1. **Install Dependencies**: Navigate to each microfrontend directory (`app1`, `app2`) and run `npm install`.
2. **Run Applications**: Start each microfrontend application by running `npm start` in their respective directories.

## Component Sharing

Shared components are located in the `container/src/components/` directory. These components can be imported and used in any of the microfrontend applications.

## State Sharing

State sharing is currently not implemented. Future work involves setting up a state management solution that allows state to be shared across different microfrontends.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

