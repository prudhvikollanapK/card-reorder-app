## Document Cards with Drag-and-Drop and Modal Image Viewer

This is a React app that displays a set of document cards. The cards can be reordered via drag-and-drop, and clicking on a card will open the full document image in a modal. The app also shows loading spinners until each image is fully loaded.

### Features

-   **Drag-and-Drop**: Reorder cards by dragging and dropping them in new positions.
-   **Image Loading**: Displays a loading spinner while images are being fetched and loaded.
-   **Modal Display**: Clicking a card opens the corresponding image in a modal overlay.
-   **ESC Support**: Pressing the `ESC` key or clicking outside the image closes the modal.

----------

### **Project Setup**

#### 1. Clone the repository

`https://github.com/prudhvikollanapK/card-reorder-app.git` 

#### 2. Install dependencies

`npm install` 

This will install all the necessary dependencies, including:

-   `react`
-   `react-dnd`
-   `react-dnd-html5-backend`
-   `react-loader-spinner`
-   `react-modal`

#### 3. Place your images in the public folder

Make sure the `images` folder containing the required images (`bank-draft.jpg`, `bank-draft-2.jpg`, `bill-of-lading.jpg`, `bill-of-lading-2.jpg`, `invoice.jpg`) is inside the `public` directory.

`public/
└── images/
    ├── bank-draft.jpg
    ├── bank-draft-2.jpg
    ├── bill-of-lading.jpg
    ├── bill-of-lading-2.jpg
    └── invoice.jpg` 

#### 4. Run the development server

`npm start` 

The app will automatically open in your default web browser at `http://localhost:3000`.

----------

### **How to Use the App**

-   **Drag and Drop**: Simply click on a card, drag it, and drop it in a new position.
-   **View Full Image**: Click on a card to open a modal with a larger version of the image. Press `ESC` or click outside the modal to close it.

----------

### **Project Structure**

-   `src/`
    -   `App.js`: The main component, handling the rendering of cards and the modal for viewing images.
    -   `App.css`: Styling for the cards, modal, and layout.
    -   `data.json`: A static file that contains the list of documents and their metadata (type, title, position).

----------

### **Thought Process**

The goal of this project was to provide an interactive way for users to view and reorder document cards, with a smooth user experience. Here are the key decisions:

-   **Drag-and-Drop**: I used the `react-dnd` library to implement drag-and-drop for card reordering. This keeps the user interface intuitive and flexible.
-   **Image Loading Feedback**: To improve the user experience, I added spinners (from `react-loader-spinner`) that show while the images are loading. This makes it clear when content is being fetched.
-   **Modal for Image Viewing**: I used `react-modal`

to create a clean and accessible modal for viewing full-size images. This keeps the user focused on the selected content and allows for easy navigation using the ESC key or by clicking outside the modal.

----------

### **Dependencies**

-   **React**: JavaScript library for building user interfaces.
-   **React DnD**: A drag-and-drop library built specifically for React.
-   **React Modal**: Library for creating modals in React.
-   **React Loader Spinner**: Library for showing a spinner while loading resources.

You can find all the dependencies listed in the `package.json` file, and these are automatically installed when you run `npm install`.

----------

### **Customization**

1.  **Adding More Documents**: You can add more document entries to the `data.json` file to display additional cards.
2.  **Custom Images**: Place new images in the `public/images/` folder, and ensure that the `document.type` field in `data.json` matches the image filenames.
3.  **Styling**: Customize the card and modal styles by editing `App.css`.

----------

### **Contributions**

Feel free to fork the repository, open issues, or submit pull requests if you want to contribute to improving this project.

----------
