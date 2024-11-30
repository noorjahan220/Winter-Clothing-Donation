# 🌨️ Winter Clothing Donation Website ❄️  

## 🌟 Purpose  
The **Winter Clothing Donation Website** is designed to connect donors with volunteers to help vulnerable people in Bangladesh stay warm during winter.  
By offering an easy-to-use platform, it facilitates the donation of winter clothing, ensuring resources reach those in need in rural and low-income areas.  
This site promotes community engagement and encourages local support with a division-focused approach.  

---

## 🌐 Live URL  
🔗 **[Visit the Live Website](http://assignment9-1234.surge.sh)**  

---

## ✨ Key Features  

### 🧥 Donation Campaigns  
- Display all ongoing campaigns with details such as **title, image, description, division**, and a **"Donate Now"** button.  
- Users can browse and select campaigns to contribute to.  

### 🔒 Private Donation Details Page  
- Accessible only after login, providing detailed information about each campaign.  
- Includes a donation form for item details, pickup location, and additional notes.  
- Shows a toast message upon successful form submission: *"Thank you! We will reach your destination soon."*  

### 🔑 User Authentication System  
- **Email and Password-based Login and Registration**.  
- **Social Login** using Google for easy access.  
- Password validation ensures strong passwords with uppercase, lowercase, and a minimum of 6 characters.  
- Forgot password functionality with email integration.  

### 📱 Responsive Design  
- Fully responsive website optimized for **mobile**, **tablet**, and **desktop**.  

### 📦 JSON-based Data Management  
- Campaign data stored in a JSON file with key details: **ID, title, image, description, status, contact info**, and **division**.  

### 🛠️ Dashboard for Users (Private Route)  
- Displays user profile details, including **name, email, and profile picture**.  
- Allows users to update profile information (name and photo) via Firebase.  

### 🎨 Winter-Themed Design  
- Aesthetic design that aligns with the purpose of winter donations, focusing on **regional divisions**.  
- Includes a **slider/banner** to showcase campaigns and community involvement.  

### 📄 Informative Sections  
- **About Section**: Explains the mission and how users can contribute.  
- **How It Works Section**: Instructions for donation and details about collection points.  
- Two additional custom sections for added engagement.  

### ⚠️ Error Handling  
- Custom **404 page** with a button to redirect users to the home page for invalid routes.  

### 🚀 Hosting and Routing  
- Hosted on **Surge** for seamless single-page application functionality.  
- Firebase domain authorization ensures secure routing.  

### ✨ Animations  
- Enhanced user experience with animation libraries like **AOS**.  

### 🔐 Password Toggle  
- Implements a "show/hide password" toggle for improved usability during registration.  

---

## 📦 NPM Packages Used  

Here are the main npm packages used in this project:  

## 📦 NPM Packages Used  

| 📦 **Package Name**       | 🌟 **Description**                                                     |  
|---------------------------|-----------------------------------------------------------------------|  
| **`aos`**                 | Adds smooth animations for scrolling elements to enhance UI/UX.      |  
| **`firebase`**            | Enables authentication and real-time database integration.           |  
| **`keen-slider`**         | Provides a carousel slider for the campaign banner.                  |  
| **`localforage`**         | Manages local storage for improved offline usability.                |  
| **`react-hot-toast`**     | Displays toast notifications for enhanced user feedback.             |  
| **`react-icons`**         | Offers a vast library of icons for UI elements.                      |  
| **`react-spinners`**      | Adds loading spinners for asynchronous operations.                   |  
| **`swiper`**              | Implements sliders to beautifully showcase campaigns.                |  
---




## 🤔 Struggles Faced  

Creating this project presented some challenges that were both rewarding and educational:

### 1. **Responsive Design Adjustments**  
   Ensuring the site displayed seamlessly across all devices was time-consuming. The most challenging parts were complex sections like the banner and campaign cards, which required careful adjustments for mobile, tablet, and desktop views.

### 2. **Firebase Authentication**  
   Implementing social login and handling private route redirection involved multiple attempts and debugging. Ensuring that users could only access specific routes when authenticated took a bit of trial and error.

### 3. **Form Validation**  
   Enforcing password validation rules was tricky, especially finding the right balance between usability and security. Ensuring that users followed strong password policies without making it frustrating was a challenge.

### 4. **Animations**  
   Integrating animations using **AOS** to enhance the user experience was rewarding, but it also required extra attention to performance optimization. Ensuring smooth animations without impacting load times was an interesting challenge.

### 5. **Deployment Issues**  
   Configuring the hosting platform for a single-page application (SPA) to handle routing without reload errors was difficult. Ensuring smooth deployment with platforms like **Netlify** or **Surge**, without causing issues for private routes, took extra effort.

Despite these challenges, overcoming them significantly enhanced my skills and deepened my understanding of web development! 🚀











# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
