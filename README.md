#CLOUD-VAULT
Designed and implemented Cloud-Vault, a dynamic web application leveraging AWS services like S3 for secure file storage and Polly for text-to-speech conversion. Developed using React on the frontend and Node.js with Express on the backend, the project facilitates seamless file uploads and sharing via generated URLs, ensuring data security and accessibility.

![image](https://github.com/Vikas-Yadav-79/Cloud-Vault/assets/121033913/500a2067-3c09-4394-b743-52540c19b3a9)

![image](https://github.com/Vikas-Yadav-79/Cloud-Vault/assets/121033913/c3338d8a-f550-49cb-a5ae-abee84aab843)

![image](https://github.com/Vikas-Yadav-79/Cloud-Vault/assets/121033913/87880a71-0f73-4fbc-81ce-b8ab1a85a58a)
![image](https://github.com/Vikas-Yadav-79/Cloud-Vault/assets/121033913/1d5840c1-ec2c-4568-a82d-e0b43d77c466)
![image](https://github.com/Vikas-Yadav-79/Cloud-Vault/assets/121033913/68fd4f2a-16a5-4494-9599-08413cdfa455)
![image](https://github.com/Vikas-Yadav-79/Cloud-Vault/assets/121033913/00837ac7-f2aa-4626-a569-c65be95548d3)



# File Sharing and Text-to-Speech Conversion Web Application

## Overview
This project provides a convenient web-based platform for users to upload files and share them via a generated URL. Additionally, it includes a feature to convert text to speech using AWS Polly.

## Features
- **File Upload and Sharing**: Users can upload files and receive a URL to share with others (Predifened URL is Already available as users visit the website without uploading there files).
- **Text-to-Speech Conversion**: Convert text to speech using AWS Polly and download the audio file.
- **Automatic File Deletion**: Uploaded files are automatically deleted after 6 days.

## Technologies Used
- **Frontend**: React
- **Backend**: Express.js,Node.js
- **File Storage**: AWS S3
- **Text-to-Speech**: AWS Polly

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)
- AWS account with S3 and Polly services enabled

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Install dependencies for the backend**
    ```bash
    cd server
    npm install
    ```

3. **Install dependencies for the frontend**
    ```bash
    cd ../client
    npm install
    ```

4. **Set up AWS credentials**
    Ensure you have your AWS credentials configured. You can use the AWS CLI or set environment variables directly.

5. **Configure environment variables**
    Create a `.env` file in the `server` directory and add your AWS credentials and S3 bucket information:
    ```env
    AWS_ACCESS_KEY_ID=your-access-key-id
    AWS_SECRET_ACCESS_KEY=your-secret-access-key
    AWS_REGION=your-aws-region
    S3_BUCKET_NAME=your-s3-bucket-name
    ```

### Running the Application

1. **Start the backend server**
    ```bash
    cd server
    npm start
    ```

2. **Start the frontend server**
    ```bash
    cd ../client
    npm run dev
    ```

### Usage

1. **Open the application**
    Navigate to `http://localhost:5173` in your web browser.

2. **Upload a file**
    - Click the "Select Files to Upload" button or drag-and-drop a file into the browser window.
    - Wait for the upload to complete.
    - Copy the generated URL to share the file.

3. **Convert text to speech**
    - Enter text in the provided field.
    - Click the "Convert to Speech" button.
    - Download the generated audio file.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.



