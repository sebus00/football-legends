import { get } from 'services/HttpService';

export async function getItems(itemType) {
  return get(`/${itemType}`);
}

export async function getSingleItem(itemType, id) {
  return get(`/${itemType}/${id}`);
}
