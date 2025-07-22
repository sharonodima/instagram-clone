import { faker } from "@faker-js/faker";

export type Post = {
  id: string;
  username: string;
  avatar: string;
  image: string;
  caption: string;
};

export const generateFakePosts = (count: number = 10): Post[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    avatar: faker.image.avatar(),
    image: faker.image.urlPicsumPhotos(), // uses picsum.photos
    caption: faker.lorem.sentence(),
  }));
};