import { CategoryInfo, PromptTemplate, GalleryItem } from '../lib/types';

export const APP_TITLE = "AI Slop : Lazy Art or Genius ?";

export const APP_DESCRIPTION = `In the age of AI-generated content, a new wave of low-effort, mass-produced images has taken over social media—often called AI slop.
These crude, sometimes bizarre visuals are frequently paired with self-pitying or emotionally manipulative captions designed to farm engagement. 
But is this just lazy, algorithm-driven junk, or is there a strange genius behind it? This session explores how AI slop thrives in the attention economy, 
why it spreads so fast, and whether it represents the decline of creativity—or a new form of digital expression.`;

export const INTRODUCTION_TEXT = `
## Reason for This Initiative

In today's digital landscape, AI-generated content is everywhere, from high-quality artwork to low-effort, mass-produced images often referred to as slop.
A growing trend in social media is the use of sloppy AI-generated images paired with self-pitying messages like 'Nobody cares about me' or 'I worked so hard, but no one noticed.' 
These posts are not just harmless expressions of emotion—they are intentional engagement traps, designed to manipulate emotions, trigger responses, 
and exploit social media algorithms for visibility. By understanding these tactics, we can become more aware of how AI is used—not just for creativity 
but also for emotional manipulation and low-effort content farming.    


## Goal of This Initiative

The goal of showcasing these examples is to help social media users critically analyze AI-generated content and recognize how AI can be used to influence online behavior.
Through this, we aim to:

* Identify low-effort AI content and understand its role in algorithmic engagement.
* Recognize emotional manipulation tactics used to drive social media interaction.
* Develop media literacy by distinguishing between genuine AI creativity and mass-produced slop.
* Encourage ethical and meaningful AI use by highlighting how AI can be leveraged for real creativity rather than viral gimmicks.



## Gallery of Slop Images    

This app provides an Image Gallery showcasing an overview of viral AI slops—low-effort, AI-generated images designed to maximize engagement. 
The most popular types of slops typically fall into the following categories :

* Large families or birthday gatherings accompanied by self-pitying messages like "We are poor" or "I am alone," evoking sympathy.
* Sculptures, crafts, farming, or cooking paired with hardship-driven messages such as "We work so hard, but nobody cares," appealing to emotions of struggle and neglect.
* Animals with their young, leveraging cuteness and emotional bonding to encourage widespread sharing.
* Archaeological discoveries with awe-inspiring descriptions, sparking curiosity and amazement that people feel compelled to share.   

By analyzing these trends, the app helps users understand how AI slop manipulates emotions to drive virality on social media.

## From Slop to Stunning: Create with LetzAI

This app demonstrates how effortless it is to generate AI-powered images—but instead of settling for low-quality, mass-produced slop, 
we empower you to create high-quality LetzAI artworks.
Simply select a topic using radio buttons and enter a short text prompt to guide the AI image generator. Unlike free, low-quality alternatives, 
LetzAI leverages one of the world’s best AI image generators, proudly developed in Luxembourg.
Your brief prompt will be automatically refined using advanced templates and models crafted by some of the most renowned Generative AI artists worldwide. 
Their names will be included in the enhanced prompts displayed in the prompt accordion below, ensuring your creation benefits from expert-level AI artistry.

`;

export const TECHNICAL_INFO_TEXT = `
# Technical Development

The first version of this app was developed using the AI tool [lovable.dev](https://lovable.dev/), a superhuman full-stack engineer, within a time frame of three hours.
The entire process consisted of five steps:

## 1. Basic Instructions

I initially wrote a brief guide in broken English to outline the layout and features of this web app. The [original document](/resources/slop-web-app.txt) is stored in the public folder of the app.

## 2. Enhanced Instructions

To refine and clarify my initial draft, I submitted it to ChatGPT for correction and improvement.
The revised version, saved as a [PDF document](/resources/AI-Web-Designer-Assistant-Instructions.pdf), is also available in the public folder of the app.

## 3. Programming and Testing

I then entered the enhanced instructions into the Lovable.dev Dashboard. The AI engineering bot generated the required code for the specified web app within minutes.
The script contents were displayed on screen, and this [development report](/resources/lovable-bot-answer.txt) was generated.

Once the app was initialized in a sandbox environment, I conducted the first test. The buttons, input fields, and accordions functioned as expected.
However, when I attempted to generate an image, the image was created, but it did not appear in the designated placeholder window.

## 4. Error Correction

I reported the issue to the Lovable-Bot with the following message:

"Everything works fine except for image generation. A message confirms that the image has been created, but it does not appear. 
The placeholder image is not being replaced by the generated image."

The Lovable-Bot identified and resolved the issue, providing a [fix-report](/resources/Error-Correction.pdf). After implementing these modifications, the app functioned correctly.

## 5. Fine-Tuning

In the final stage, I refined the title, description, introduction, and technical information with the assistance of ChatGPT.
I uploaded images and labels for the Slop Gallery and specified image prompts for various topics.

These modifications were made in my [GitHub repository](https://github.com/mbarnig/creative-slop-creator/) which was automatically created by Lovable.dev and synchronizes bidirectionally with code changes.

![github-slop-repo](/images/github-slop-repo.png)

After conducting final tests, I also adjusted the initial layout to enhance the user experience.

Here is the README.md file of the Github repository **creatve-slop-creator**

## Summary
The entire process took me less than a day—compared to an estimated two-week development period without AI assistance.

## Illustration

To provide a visual reference, here is a screenshot of the Lovable.dev platform.

![lovable-dev screenshot](/images/lovable-dev.png)

# Technical Implementation of the Backend

This application uses the [LetzAI API](https://api.letz.ai) to generate high-quality AI images based on user inputs.
Below you'll find technical details about the implementation and resources for developers.

## API Integration

The application integrates with the LetzAI API using the following workflow:
1. User selects a category and enters parameters
2. The app generates a prompt based on the template
3. A POST request is sent to the LetzAI API endpoint
4. The application polls for image generation status
5. When ready, the image is displayed in the UI

## Code Snippets

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
        label: 'Characteristic',
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
        label: 'Characteristic',
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
    template: 'A highly detailed and photorealistic image of a large family consisting of {0} children and {1} adults, set in {2}. The family members display warm, natural expressions and realistic skin textures, with diverse and lifelike facial features. Their clothing and hairstyles reflect contemporary fashion or the cultural background suited to the setting. The environment is rich in detail, with natural lighting and soft shadows enhancing the realism. The composition is well-balanced, capturing the depth and perspective of the scene. The image should be ultra-high-resolution with fine attention to intricate elements such as facial features, fabric textures, and environmental elements. Rendered in the style of @film_is_not_dead.'
  },
  {
    id: 'birthday',
    template: 'A highly detailed and photorealistic image capturing a joyous birthday celebration for {1}, who is turning {0} years old. The centerpiece of the scene is a beautifully decorated birthday cake featuring candles shaped in the form of the numbers, casting a warm and festive glow. The setting and the people present are described in {2}, ensuring a lively and immersive atmosphere. The image radiates a festive mood with vibrant decorations, authentic expressions of happiness, and natural interactions. Realistic textures, soft lighting, and dynamic composition enhance the sense of depth and realism. The image should be ultra-high-resolution, emphasizing intricate details such as facial features, fabric textures, reflections on glassware, and the flickering candlelight. Rendered in the  style of @coolfilms.'
  },
  {
    id: 'sculpture',
    template: 'A highly detailed and photorealistic image of {0} skillfully creating a sculpture made of {1}, set in {2}. The scene captures the artistic process in vivid detail, showcasing the sculptor’s focused expression, the texture of the material being shaped, and the tools in use. The environment reflects an authentic workshop, studio, or outdoor setting, with natural lighting enhancing the realism. Fine details such as dust particles, tool marks, and the sculptor’s hands at work are emphasized, creating a sense of depth and immersion. The image should be ultra-high-resolution, with lifelike textures, dynamic composition, and intricate elements that highlight the artistry and craftsmanship. Rendered in the style of @juliewdesign_retrofilter.'
  },
  {
    id: 'fruits-vegetables',
    template: 'A highly detailed and photorealistic image of {0}, exhibiting {1} characteristics, being interacted with by {2}. The composition is vibrant and immersive, with rich, natural colors that enhance the unique textures and surreal qualities of the fruits. The interaction between the individuals and the fruits is dynamic and expressive, capturing realistic hand movements, reflections, and depth. Fine details such as subtle light reflections, the organic textures of the fruits, and the expressions of curiosity or wonder on the individuals faces are emphasized. The scene should be ultra-high-resolution, ensuring crisp details, lifelike lighting, and a visually striking contrast between the natural and the extraordinary. Rendered in the style of @aaron_v2.'
  },
  {
    id: 'animals',
    template: 'A highly detailed and photorealistic image of {0} engaging in {1} in {2}. The composition captures the animals in a natural, dynamic pose, emphasizing their authentic movements and behaviors. The setting is immersive, rich in detail, and enhances the realism, with natural lighting that highlights textures such as fur, feathers, or scales. The scene should feel lifelike, with depth and atmosphere, incorporating subtle environmental elements like wind effects, reflections, or shadows. The image should be ultra-high-resolution, showcasing intricate details such as individual hairs, water droplets, or the softness of natural textures. Rendered in the expressive and textured style of @impressionism, blending realism with painterly depth to create a visually captivating piece.'
  },
  {
    id: 'food',
    template: 'A highly detailed and photorealistic image of {0}, featuring {1}, being skillfully prepared or elegantly presented by {2} as cook. The dish appears rich in texture, with vibrant colors and realistic lighting that enhances its appetizing appeal. Steam, glistening sauces, or fresh ingredients contribute to a mouthwatering effect. The setting is immersive, whether a professional kitchen, a rustic home setting, or a high-end restaurant, with fine details such as reflections on utensils, the texture of the ingredients, and the cook’s precise hand movements. The composition is well-balanced, making the dish the focal point while maintaining a natural, dynamic atmosphere. The image should be ultra-high-resolution, capturing intricate elements like seasoning granules, knife marks, or the sheen of freshly cooked food. Rendered in the style of @chef.'
  },
  {
    id: 'archeology',
    template: 'A highly detailed and photorealistic image of an archaeological discovery featuring {0} being carefully unearthed. The discovery is made by {1}, who is shown meticulously excavating the site with professional tools and techniques. The scene is set in {2}, with realistic environmental details such as layers of sediment, dust particles in the air, and the texture of the exposed artifact. The composition emphasizes scientific accuracy, capturing the authenticity of an active dig site with lifelike lighting, natural shadows, and an immersive sense of depth. Fine details such as dirt on the researcher’s gloves, delicate brush strokes removing dust, and the fragile surface of the unearthed object add to the realism. The image should be ultra-high-resolution, with crisp textures, atmospheric lighting, and a documentary-style authenticity. Rendered in the highly realistic, scientific style of @charstyle.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    category: 'large-family',
    image: '/images/gallery/pauvres-0.png',
    title: 'Family of Four',
    description: 'A family with 2 children and both parents in a booth'
  },
  {
    id: '2',
    category: 'birthday',
    image: '/images/gallery/birthday-101.png',
    title: '101th Birthday',
    description: 'An old man celebrating his 101th birthday alone at home'
  },
  {
    id: '3',
    category: 'birthday',
    image: '/images/gallery/four-sisters.png',
    title: 'Four Sisters',
    description: 'Wrong quadruplets turned 90 and are asking for congratulations'
  },
  {
    id: '4',
    category: 'birthday',
    image: '/images/gallery/birthday-188xxx.png',
    title: '880 Years',
    description: 'An old man in front of a birthday cake with candles numbered 8 8 0'
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
