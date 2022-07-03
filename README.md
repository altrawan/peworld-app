<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/altrawan/peworld-app">
    <img src="https://lh3.googleusercontent.com/d/1WVrwo9yY-SQ7rh7SpYUOvykp1hWVyTNo" alt="Logo" width="400px">
  </a>

  <h3 align="center">Peworld Hire</h3>

  <p align="center">
    Find talented & best developers in various fields.
    <br />
    <a href="#table-of-contents"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://bit.ly/peworld-hire">View Demo</a>
    ·
    <a href="https://github.com/altrawan/peworld-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/altrawan/peworld-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup-env-example">Setup .env example</a></li>
      </ul>
    </li>
    <li><a href="#screenshoots">Screenshots</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#related-project">Related Project</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
**Peworld Hire** is a simple job website that can facilitating company to recruit talented programmer based on skills that company needed. It also provide programmer to show their portofolio so they can get recruited by some company.

### Built With
This app was built with some technologies below:
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=id)
* [Javascript](https://www.javascript.com/)
* [Next Js](https://nextjs.org/)
* [Axios](https://axios-http.com/)
* [Redux](https://redux.js.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Socket.io](https://socket.io/)
* [Moment](https://momentjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

* [NodeJs](https://nodejs.org/en/download/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

If you want to run this project locally, I recommend you to configure the [back-end](https://github.com/altrawan/hire-job-api) first before configuring this repo front-end.
- Clone the repo
```
git clone https://github.com/altrawan/peworld-app.git
```
- Go To Folder Repo
```
cd peworld-app
```
- Install Module
```
npm install
```
- <a href="#setup-env">Setup .env</a>
- Type ` npm run dev` To Start Development
- Type ` npm run start` To Start Production

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup .env example
Create .env file in your root project folder.
```
NEXT_PUBLIC_APP_NAME = [YOUR_APP_NAME]
NEXT_PUBLIC_NODE_ENV = [YOUR_CURRENT_ENVIRONMENT]
NEXT_PUBLIC_API_URL = [YOUR_API_URL]
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Screenshoots
<p align="center" display=flex>

<table>
 <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1tzS8NBQtMGku6cXficIW5wQClduek1KQ" alt="Landing Page" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/1vALeDMD_fNkAKQqqqRuFDHt11nGbSBh6" alt="Landing Page After Login" width=100%/></td>
  </tr>
   <tr>
    <td>Landing Page</td>
    <td>Landing Page After Login</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1oag1KBgj-fQAzsmwjvNPCOELoqAeXbEO" alt="Login Page" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/17yeQqw408hiDDOyFZq17Fw3ovnswsQ7D" alt="Forgot Password Page" width=100%/></td>
  </tr>
   <tr>
    <td>Login Page</td>
    <td>Forgot Password Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1nshaEdAJsPJUPJ4uR1bmM_275Rrf6zlb" alt="Register Worker Page" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/1ovMJdHmSF2b1MfGMEbXM22YbyJhF1305" alt="Register Recruiter Page" width=100%/></td>
  </tr>
   <tr>
    <td>Register Worker Page</td>
    <td>Register Recruiter Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1Rv3GPrjZCZkgf7jJkXTUo7Rq21qT0RWF" alt="Reset Password Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1faiv7WfqKLpWx4fT67ITpTqhg0AGIvma" alt="Send Message" width=100%></td>
  </tr>
  <tr>
    <td>Reset Password Page</td>
    <td>Send Message</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1xa6v3_KTTxLq9yENUX5FQ0dDfexhLHhT" alt="List Worker Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1uaE7J2Chz_sd0C546eiUzeiqfZk9KV35" alt="List Recruiter Page" width=100%></td>
  </tr>
  <tr>
    <td>List Worker Page</td>
    <td>List Recruiter Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1rAB9MAE1YXduQR54z2GV4-LIUjULrlHt" alt="Profile Worker - Portofolio Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1kK97he_sI5VXQu386PCdWMa5mIOMrJof" alt="Profile Worker - Experience Page" width=100%></td>
  </tr>
  <tr>
    <td>Profile Worker - Portofolio Page</td>
    <td>Profile Worker - Experience Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/10QlGAEHAQKd7uUjGX7PdEgahAIWdDgEx" alt="Detail Worker Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1Lg2xtIj-Bw66hfeiw43UkXWWE-Yl8Suf" alt="Edit Profile Worker Page" width=100%></td>
  </tr>
  <tr>
    <td>Detail Worker Page</td>
    <td>Edit Profile Worker Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1JC4ey8k86NJ7y6yigBRWV85ca5rZguBh" alt="Profile Recruiter Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1_TUFkzjW2SdQOuUdzPFi1yfNus2fdgqX" alt="Detail Recruiter Page" width=100%></td>
  </tr>
  <tr>
    <td>Profile Recruiter Page</td>
    <td>Detail Recruiter Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/11rAYOaeWBScl3H8V7zIfIHMwtyWcwBhr" alt="Edit Profile Recruiter Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1f_AUAzw2cVNNIp7EZ27snqve0ze1udI7" alt="Hire Page" width=100%></td>
  </tr>
  <tr>
    <td>Edit Profile Recruiter Page</td>
    <td>Hire Page</td>
  </tr>

</table>
      
</p>

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Related Project
:rocket: [`Backend Peworld Hire`](https://github.com/altrawan/hire-job-api)

:rocket: [`Frontend Peworld Hire`](https://github.com/altrawan/peworld-app)

:rocket: [`Web Service`](https://peworld-hire.herokuapp.com/)

:rocket: [`Demo Peworld Hire`](https://bit.ly/peworld-hire)

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

My Email : muhammadalifputra8888@gmail.com

Project Link: [https://github.com/altrawan/peworld-app](https://github.com/altrawan/peworld-app)

<p align="right">(<a href="#top">back to top</a>)</p>

## License
Distributed under the [MIT](/LICENSE) License.

<p align="right">(<a href="#top">back to top</a>)</p>
