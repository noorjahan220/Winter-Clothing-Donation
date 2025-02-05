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

## 📦 Technologies Used  
- **React.js** (Frontend Framework)  
- **Vite** (Lightning-fast development environment)  
- **Firebase** (Authentication & Hosting)  
- **Surge** (Static site hosting)  
- **AOS** (Animations)  
- **React Hot Toast** (Notification system)  

---

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

## 🛠 How to Run Locally  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/winter-clothing-donation.git
