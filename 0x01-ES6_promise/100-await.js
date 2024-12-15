import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [uphoto, cser] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo: uphoto, user: cser };
  } catch (err) {
    return { photo: null, user: null };
  }
}
