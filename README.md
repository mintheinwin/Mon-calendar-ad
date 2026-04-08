# Ad Slideshow Project

A responsive ad slideshow webpage with HTML, CSS, and JavaScript.

## Project Structure

```
web-ad/
├── index.html        # Main HTML file
├── styles.css        # CSS styling
├── script.js         # JavaScript functionality
├── images/           # Image folder for slides
│   ├── slide-1.jpg
│   ├── slide-2.jpg
│   ├── slide-3.jpg
│   └── slide-4.jpg
└── README.md         # This file
```

## How to Add Images

1. **Navigate to the `images` folder** in your project directory
2. **Add your images** with the following names:
   - `slide-1.jpg` - First slide image
   - `slide-2.jpg` - Second slide image
   - `slide-3.jpg` - Third slide image
   - `slide-4.jpg` - Fourth slide image

3. **Recommended image specifications:**
   - Aspect ratio: 2:1 (800x400px or larger)
   - Format: JPG, PNG, or WebP
   - File size: 100-300KB each for optimal performance

## Features

- ✅ Auto-playing slideshow (5-second intervals)
- ✅ Manual navigation with arrow buttons
- ✅ Dot indicators for quick slide selection
- ✅ Responsive design (works on all devices)
- ✅ Smooth fade transitions
- ✅ Call-to-action button

## How to Use

1. Open `index.html` in your web browser
2. Images will automatically cycle every 5 seconds
3. Click arrows to manually navigate
4. Click dots to jump to a specific slide
5. Click "View Offer" button to trigger an action

## Customization

### Change Auto-play Speed
Edit `script.js` and modify the timeout value (currently 5000ms):
```javascript
}, 5000); // Change 5000 to desired milliseconds
```

### Change CTA Button Action
Edit `script.js` in the `handleCTA()` function:
```javascript
function handleCTA() {
    // Replace this with your action
    window.location.href = 'https://your-url.com';
}
```

### Modify Colors
Edit `styles.css` to change the gradient and button colors.

## Notes

- All images must be placed in the `images` folder
- The slideshow uses local image paths, so no internet connection is required
- Ensure image files are named exactly as specified above
