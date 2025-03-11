
# Create a Slop - AI Image Generator

"Create a Slop" is an elegant web application that generates AI images based on user inputs through category selection and short text input fields.

## Project info

**URL**: https://lovable.dev/projects/ef0b938c-4bde-40c7-a1de-12cefa6688d8

## Features

- Choose from 7 different image categories
- Dynamic input fields that change based on selected category
- Automatic prompt generation
- Secure API key storage in local storage
- Image generation using the LetzAI API
- Gallery of example images

## Configuration

All text content and configuration is easily modifiable via files in the `src/config` directory:

### Main Configuration (`src/config/config.ts`)

- **Title & Description**: Change the application title and description
- **Introduction Text**: Modify the text in the introduction accordion
- **Categories**: Configure the categories and their input fields
- **Prompt Templates**: Modify the prompt templates used for each category
- **Gallery Items**: Add or modify example images in the gallery

### Image Configuration

- **Placeholder Image**: Replace the image at `public/images/placeholder.png`
- **Gallery Images**: Add or modify images in the `public/images/gallery/` directory
  
## How to modify the application

### Changing the title, description, or introduction

Edit the values in `src/config/config.ts`:

```typescript
export const APP_TITLE = "Your New Title";
export const APP_DESCRIPTION = "Your new description";
export const INTRODUCTION_TEXT = "Your new introduction text";
```

### Adding or modifying categories

Edit the `CATEGORIES` array in `src/config/config.ts`:

```typescript
export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'your-category-id',
    label: 'Your Category Name',
    description: 'Your category description',
    fields: [
      { 
        label: 'Your Field Label',
        placeholder: 'Your placeholder text',
        maxLength: 20
      },
      // Add more fields as needed
    ]
  },
  // Add more categories as needed
];
```

### Modifying prompt templates

Edit the `PROMPT_TEMPLATES` array in `src/config/config.ts`:

```typescript
export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: 'your-category-id',
    template: 'Your prompt template with {0}, {1}, and {2} placeholders'
  },
  // Add more templates as needed
];
```

### Adding new gallery examples

1. Add your image to the `public/images/gallery/` directory
2. Edit the `GALLERY_ITEMS` array in `src/config/config.ts`:

```typescript
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'unique-id',
    category: 'your-category-id',
    image: '/images/gallery/your-image.jpg',
    title: 'Your Image Title',
    description: 'Your image description'
  },
  // Add more gallery items as needed
];
```

## API Integration

The application is designed to integrate with the LetzAI API. For a real implementation, modify the `generateImage` function in `src/lib/api.ts` to make actual API calls.

## License

This project is private and confidential.
