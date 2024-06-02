# Settlement System

## Overview
This project implements a settlement system between two parties, Party A and Party B. It allows Party A to submit a settlement amount, which can be modified iteratively until Party B responds. Party B can either agree or dispute the submitted amount. The system ensures that all changes and responses are reflected on both Party A's and Party B's interfaces.

## Features
- **Initial Submission**: Party A can submit an initial settlement amount.
- **Modification and Resubmission**: Party A can modify and resubmit the settlement amount until Party B responds.
- **Dispute and Agreement Handling**: Party B can dispute or agree to the submitted amount. If disputed, Party A can modify and resubmit the amount.
- **Display Responses**: Party A’s interface displays Party B’s current response (dispute or agreement, and current amount), and Party B's interface displays the amount submitted by Party A.
- **Settlement Completion**: Once Party B agrees, the system transitions to a settled state.

## Technologies Used
- React
- Chakra UI

## Installation
1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:

## Usage
1. Start the development server:

2. Open your browser and go to `http://localhost:3000`.

## Project Structure
settlement-system/
├── src/
│ ├── components/
│ │ ├── PartyA.tsx
│ │ └── PartyB.tsx
│ ├── App.tsx
│ └── index.tsx
└── README.md

## Component Descriptions
- **PartyA**: Component for Party A's interface, responsible for submitting settlement amounts and fetching responses from Party B.
- **PartyB**: Component for Party B's interface, allowing Party B to respond to settlement submissions from Party A.
