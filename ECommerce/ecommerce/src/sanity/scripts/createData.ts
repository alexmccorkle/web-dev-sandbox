import { faker } from '@faker-js/faker';
import { getCliClient } from 'sanity/cli';

const client = getCliClient();
const COUNT = 5;
const CLOTHING_CATEGORY_ID = 'fa4b4ae6-5a08-4498-acaa-80a6466b70c3';

async function uploadImageAsset(imageUrl: string) {
  try {
    // Fetch the image from the placeholder service
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();

    // Upload to Sanity as an asset
    const result = await client.assets.upload('image', Buffer.from(buffer));
    return result._id;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

async function createData() {
  console.log('Creating data with: ');
  console.log('Project ID: ', client.config().projectId);
  console.log('Dataset: ', client.config().dataset);

  const transactions = client.transaction();

  for (let i = 0; i < COUNT; i++) {
    const productName = `${faker.commerce.productAdjective()} ${faker.commerce.product()}`;
    const slug = faker.helpers.slugify(productName).toLowerCase();
    
    // Get a random placeholder image
    const imageId = await uploadImageAsset(`https://picsum.photos/800/600?grayscale`);

    transactions.create({
      _type: 'product',
      name: productName,
      slug: {
        _type: 'slug',
        current: slug,
      },
      image: imageId ? {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageId
        }
      } : undefined,
      description: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: `This ${productName.toLowerCase()} is made with ${faker.commerce.productMaterial()}. ${faker.commerce.productDescription()}`,
            },
          ],
        },
      ],
      price: parseFloat(faker.commerce.price({ min: 20, max: 200 })),
      stock: faker.number.int({ min: 1, max: 50 }),
      categories: [
        {
          _type: 'reference',
          _ref: CLOTHING_CATEGORY_ID
        }
      ]
    });
  }

  try {
    const result = await transactions.commit();
    console.log('Complete!', result);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

createData();