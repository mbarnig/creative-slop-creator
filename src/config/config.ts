import { CategoryInfo, PromptTemplate, GalleryItem } from '../lib/types';

export const APP_TITLE = "AI Slop : Lazy Art or Genius ?";

export const APP_DESCRIPTION = `In the age of AI-generated content, a new wave of low-effort, mass-produced images has taken over social media—often called AI slop.
These crude, sometimes bizarre visuals are frequently paired with self-pitying or emotionally manipulative captions designed to farm engagement. 
But is this just lazy, algorithm-driven junk, or is there a strange genius behind it? This session explores how AI slop thrives in the attention economy, 
why it spreads so fast, and whether it represents the decline of creativity—or a new form of digital expression.`;

export const INTRODUCTION_TEXT = `
**Reason for This Initiative**

"In today's digital landscape, AI-generated content is everywhere, from high-quality artwork to low-effort, mass-produced images often referred to as slop.
A growing trend in social media is the use of sloppy AI-generated images paired with self-pitying messages like 'Nobody cares about me' or 'I worked so hard, but no one noticed.' 
These posts are not just harmless expressions of emotion—they are intentional engagement traps, designed to manipulate emotions, trigger responses, 
and exploit social media algorithms for visibility. By understanding these tactics, we can become more aware of how AI is used—not just for creativity 
but also for emotional manipulation and low-effort content farming."  

**Goal of This Initiative**

"The goal of showcasing these examples is to help social media users critically analyze AI-generated content and recognize how AI can be used to influence online behavior.
Through this, we aim to:

* Identify low-effort AI content and understand its role in algorithmic engagement.
* Recognize emotional manipulation tactics used to drive social media interaction.
* Develop media literacy by distinguishing between genuine AI creativity and mass-produced slop.
* Encourage ethical and meaningful AI use by highlighting how AI can be leveraged for real creativity rather than viral gimmicks."

**Gallery of Slop Images**
This app shows in the Image Gallery an overview of some viral slops. 

**Remove slops and create LetzAI Artworks**
To show how easy it is to create this sort of content, the present app allows you to select a topic
with radio buttons and to enter some short text prompts in the related input fields to give some guidance to the LetzAI image generator. 
`;

export const TECHNICAL_INFO_TEXT = `
## Technical Implementation

This application uses the [LetzAI API](https://api.letz.ai) to generate high-quality AI images based on user inputs. Below you'll find technical details about the implementation and resources for developers.

### API Integration

The application integrates with the LetzAI API using the following workflow:
1. User selects a category and enters parameters
2. The app generates a prompt based on the template
3. A POST request is sent to the LetzAI API endpoint
4. The application polls for image generation status
5. When ready, the image is displayed in the UI

### Resources

- [API Documentation](/resources/api-docs.txt)
- [Implementation Guide](/resources/implementation-guide.pdf)
- [Usage Examples](/resources/examples.txt)

### Code Snippets

\`\`\`typescript
// Example API call
const response = await fetch('https://api.letz.ai/images', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    prompt: generatedPrompt,
    width: 1440,
    height: 1440,
    quality: 3,
    creativity: 4
  })
});
\`\`\`

For more information about the implementation details, please refer to the [GitHub repository](https://github.com/yourusername/create-a-slop).
`;

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'large-family',
    label: 'Large Family',
    description: 'Create images of families in various settings',
    fields: [
      { 
        label: 'Number of children',
        placeholder: 'e.g. 3',
        maxLength: 20
      },
      { 
        label: 'Parents',
        placeholder: 'mother, father, both, grandparents',
        maxLength: 20
      },
      { 
        label: 'Location',
        placeholder: 'home, outside',
        maxLength: 20
      }
    ]
  },
  {
    id: 'birthday',
    label: 'Birthday',
    description: 'Generate birthday celebration images',
    fields: [
      { 
        label: 'Age',
        placeholder: 'e.g. 7, 30, 50',
        maxLength: 20
      },
      { 
        label: 'Person',
        placeholder: 'man, woman, boy, girl',
        maxLength: 20
      },
      { 
        label: 'Environment',
        placeholder: 'alone, hospital, family, friends',
        maxLength: 20
      }
    ]
  },
  {
    id: 'sculpture',
    label: 'Sculpture',
    description: 'Create images of sculptures in different settings',
    fields: [
      { 
        label: 'Sculptor',
        placeholder: 'man, woman, boy, girl',
        maxLength: 20
      },
      { 
        label: 'Material',
        placeholder: 'wood, plastic, waste, vegetables',
        maxLength: 20
      },
      { 
        label: 'Location',
        placeholder: 'home, wood, Africa',
        maxLength: 20
      }
    ]
  },
  {
    id: 'fruits-vegetables',
    label: 'Fruits & Vegetables',
    description: 'Generate images of fruits and vegetables',
    fields: [
      { 
        label: 'Cultivation',
        placeholder: 'fruits, vegetables, quantities',
        maxLength: 20
      },
      { 
        label: 'Abnormality',
        placeholder: 'small, big, likeness',
        maxLength: 20
      },
      { 
        label: 'Persons',
        placeholder: 'family, man, woman, children',
        maxLength: 20
      }
    ]
  },
  {
    id: 'animals',
    label: 'Animals',
    description: 'Create images of animals in their environments',
    fields: [
      { 
        label: 'Animal',
        placeholder: 'birds, mammals, pets, fishes',
        maxLength: 20
      },
      { 
        label: 'Action',
        placeholder: 'cub transport, feed',
        maxLength: 20
      },
      { 
        label: 'Location',
        placeholder: 'nest, lair, water',
        maxLength: 20
      }
    ]
  },
  {
    id: 'food',
    label: 'Food',
    description: 'Generate images of various food and culinary scenes',
    fields: [
      { 
        label: 'Food',
        placeholder: 'pastries, meal',
        maxLength: 20
      },
      { 
        label: 'Abnormality',
        placeholder: 'quantity, look, size',
        maxLength: 20
      },
      { 
        label: 'Cook',
        placeholder: 'man, woman, child, animal',
        maxLength: 20
      }
    ]
  },
  {
    id: 'archeology',
    label: 'Archeology',
    description: 'Create images of archeological discoveries',
    fields: [
      { 
        label: 'Discovery',
        placeholder: 'skeleton, treasure, dinosaur',
        maxLength: 20
      },
      { 
        label: 'Humans',
        placeholder: 'single person, a few people, many people',
        maxLength: 20
      },
      { 
        label: 'Location',
        placeholder: 'desert, pyramids, country',
        maxLength: 20
      }
    ]
  }
];

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: 'large-family',
    template: 'A photorealistic image of a large family with {0} children and {1}, located {2}. The image should be high quality, detailed and lifelike.'
  },
  {
    id: 'birthday',
    template: 'A photorealistic birthday celebration for a {1} who is turning {0} years old, {2}. The image should be festive, detailed and lifelike.'
  },
  {
    id: 'sculpture',
    template: 'A detailed photograph of a {0} creating a sculpture made of {1}, located in {2}. The image should be high quality and realistic.'
  },
  {
    id: 'fruits-vegetables',
    template: 'A photorealistic image of {0}, with {1} characteristics, being interacted with by {2}. The image should be vibrant and detailed.'
  },
  {
    id: 'animals',
    template: 'A high-quality photorealistic image of {0} {1} in their {2}. The image should be detailed, lifelike and show natural behavior.'
  },
  {
    id: 'food',
    template: 'A photorealistic image of {0} with {1}, being prepared or presented by {2}. The image should be detailed and appetizing.'
  },
  {
    id: 'archeology',
    template: 'A photorealistic archeological discovery of {0} being unearthed. The image should be detailed, scientific and realistic.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    category: 'large-family',
    image: '/images/gallery/pauvres-0.png',
    title: 'Family of Five',
    description: 'A large family with 3 children and both parents at home'
  },
  {
    id: '2',
    category: 'birthday',
    image: '/images/gallery/birthday-101.png',
    title: '101th Birthday',
    description: 'A young girl celebrating her 7th birthday with friends'
  },
  {
    id: '3',
    category: 'birthday',
    image: '/images/gallery/four-sisters.png',
    title: 'Wood Sculptor',
    description: 'A man creating a wooden sculpture in an African setting'
  },
  {
    id: '4',
    category: 'birthday',
    image: '/images/gallery/birthday-188xxx.png',
    title: 'Bird Feeding',
    description: 'A bird feeding its cubs in their nest'
  }
];

export const API_CONFIG = {
  width: 1440,
  height: 1440,
  quality: 3,
  creativity: 4,
  watermark: true,
  systemVersion: 3,
  mode: "turbo"
};

export const LOCAL_STORAGE_KEY = 'slop_api_key';
