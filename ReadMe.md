# Vishal More - Portfolio Website

A modern, responsive portfolio website to showcase my skills, projects, and experience in Data Science, AI, and Software Engineering.

---

## 🚀 Features

- **Responsive Design:** Looks great on desktop and mobile.
- **Animated Sections:** Smooth scroll animations using AOS.
- **Skills Showcase:** Visual badges for programming languages, tools, and frameworks.
- **Portfolio Gallery:** Filterable project showcase with links to GitHub and live demos.
- **Experience Timeline:** Professional journey displayed as a timeline.
- **Contact Form:** Send messages directly (Node.js backend with Nodemailer).
- **Downloadable Resume:** Easy access to download CV.
- **Back-to-Top Button:** Quick navigation for users.
- **Modern UI:** Built with Bootstrap 5, custom CSS, and Google Fonts.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Bootstrap 5, JavaScript, AOS (Animate On Scroll)
- **Backend:** Node.js, Express.js, Nodemailer
- **Other:** Power BI, Python, SQL, and more (see Skills section)

---

## 📂 Project Structure

```
portfolio-website/
│
├── backend/
│   └── server.js         # Node.js backend for contact form
│
├── css/
│   └── style.css         # Custom styles
│
├── images/               # All images and icons
├── icons/                # Skill and tool icons
├── js/
│   └── script.js         # Custom JavaScript (animations, filtering, etc.)
│
├── .env.local            # Environment variables (email password, not committed)
├── .gitignore
├── index.html            # Main website file
├── resume.pdf            # Downloadable resume
└── ReadMe.md             # This file
```

---

## 📦 Setup & Usage

### 1. **Clone the repository**
```bash
git clone https://github.com/Vishal2053/portfolio-website.git
cd portfolio-website
```

### 2. **Install backend dependencies**
```bash
cd backend
npm install
```

### 3. **Configure Environment Variables**
Create a `.env.local` file in the root directory:
```
EMAIL_PASS=your_gmail_app_password
```

### 4. **Run the Backend Server**
```bash
node server.js
```
The backend will run on [http://localhost:5000](http://localhost:5000).

### 5. **Open the Website**
Open `index.html` in your browser, or use a local server (like Live Server in VS Code).

---

## ✉️ Contact Form

- The contact form sends emails using Nodemailer and your Gmail app password.
- Make sure to use an [App Password](https://support.google.com/accounts/answer/185833?hl=en) for Gmail.

---

## 📸 Screenshots

> ![Portfolio Screenshot](images/banner-01.png)
> _Home Section_

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Vishal More**  
[GitHub](https://github.com/Vishal2053) | [LinkedIn](https://www.linkedin.com/in/vishal-more-4b9236228/)

---

> _Feel free to fork, use, and customize this template for