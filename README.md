# Web Portfolio — React (Detailed README)

A professional personal web portfolio built with **React**, **Material UI**, **EmailJS**, and deployed to **Firebase Hosting**. The site highlights design work and projects and uses a responsive hamburger menu.

**Live Demo:** [https://portfolio-feafd.web.app](https://portfolio-feafd.web.app)

---

## 📌 Overview

This repository contains the source code for a personal web portfolio, designed to showcase skills, case studies and projects as a Web Designer. Its primary goals are:

* Present an attractive, professional front-facing portfolio of work
* Provide easy access to contact and project details
* Offer a contact/reservation mechanism using EmailJS
* Be fully responsive and performant across devices

---

## 🚀 Live Demo

Visit the live site to review layout, animations and overall UX:
[https://portfolio-feafd.web.app](https://portfolio-feafd.web.app)

---

## ✨ Key Features

* Fully responsive **hamburger menu** for mobile and small screens
* Clean project showcase with project cards, descriptions and links
* Contact form (EmailJS) to send messages directly to a configured email address
* Material UI components for consistent UI and accessibility-friendly components

---

## 🛠️ Tech Stack

* **React** (functional components & hooks)
* **Material UI** for UI components and layout
* **EmailJS** for sending contact form submissions
* **Firebase Hosting** for static hosting and deployment

---

## 🔧 Installation & Local Development

1. Clone the repository:

```bash
git clone https://github.com/josueeliezer01/portfolio
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

---

## 📫 Contact Form (EmailJS)

If using EmailJS, ensure the service ID, template ID and public key are configured in `.env`. The contact form should:

* Validate required fields (name, email, message)
* Provide user feedback for success/failure
* Optionally include simple anti-spam (honeypot field) or reCAPTCHA

---

## 📦 Deployment (Firebase Hosting)

1. Build the production bundle:

```bash
npm run build
```

2. Install and login to Firebase CLI (if not already):

```bash
npm install -g firebase-tools
firebase login
```

3. Initialize Firebase Hosting (first-time setup):

```bash
firebase init
# choose Hosting, select project, set "build" as public directory for React
```

4. Deploy:

```bash
firebase deploy --only hosting
```

---