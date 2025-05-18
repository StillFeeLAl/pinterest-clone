document.addEventListener('DOMContentLoaded', () => {
    const imageUploadInput = document.getElementById('image-upload');
    const imageCaptionInput = document.getElementById('image-caption');
    const addImageButton = document.getElementById('add-image');
    const imageGrid = document.getElementById('image-grid');

    // Load images from localStorage
    let images = JSON.parse(localStorage.getItem('images')) || [];
    renderImages();

    // Function to add a new image
    addImageButton.addEventListener('click', () => {
        const imageFile = imageUploadInput.files[0];
        const imageCaption = imageCaptionInput.value.trim();

        if (imageFile) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const imageUrl = event.target.result; // Data URL

                // Create a temporary image object
                const img = new Image();

                img.onload = () => { // Ensure the image is loaded before using it

                    const newImage = {
                        url: imageUrl,
                        caption: imageCaption
                    };

                    images.push(newImage);
                    localStorage.setItem('images', JSON.stringify(images));
                    renderImages();

                    imageUploadInput.value = ''; // Clear the file input
                    imageCaptionInput.value = '';
                };

                img.onerror = () => { // Handle potential image loading errors
                    alert("Error loading image.");
                };
                img.src = imageUrl;
            };

            reader.readAsDataURL(imageFile); // Read the file as a data URL
        } else {
            alert('Please select an image file.');
        }
    });

    // Function to render images in the grid
    function renderImages() {
        imageGrid.innerHTML = '';
        images.forEach((image, index) => {
            const imageItem = document.createElement('div');
            imageItem.classList.add('image-item');

            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = `Image ${index + 1}`;

            const captionElement = document.createElement('p');
            captionElement.textContent = image.caption || "No caption";

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent click from bubbling up
                deleteImage(index);
            });

            imageItem.appendChild(imgElement);
            imageItem.appendChild(captionElement);
            imageItem.appendChild(deleteButton); // Add delete button
            imageGrid.appendChild(imageItem);
        });
    }

    function deleteImage(index) {
        images.splice(index, 1); // Remove image from array
        localStorage.setItem('images', JSON.stringify(images)); // Update localStorage
        renderImages(); // Re-render the grid
    }
});