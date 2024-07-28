# Beekeeping Product Display App

##DISCLAIMER##
APP IS NOT READY YET
##################

## Overview

This application is a Beekeeping Product Display platform built with modern web technologies. It allows users to view beekeeping products and articles, while administrators can manage content through a secure admin interface.

## Tech Stack

- **Frontend:** React with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, Framer Motion
- **Backend & Database:** Firebase (Firestore)
- **Authentication:** Firebase Authentication
- **File Storage:** Firebase Storage

## Features

- Responsive product display gallery
- Article system for beekeeping tips and information
- Admin panel for content management
- User authentication
- Image upload and management

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
2. Install dependencies:
3. Create a `.env` file in the root directory and add your Firebase configuration:
###
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
###
4. Start the development server:
   -npm run dev
   
## Firebase Setup

1. Create a new Firebase project in the Firebase Console.
2. Enable Firestore, Storage, and Authentication services.
3. Set up Firestore security rules to protect your data.
4. Configure Storage rules to allow image uploads.

   
