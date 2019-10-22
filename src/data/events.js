import { useCollection, useFirestoreCollectionDocs, useFirestoreDocument } from './utils';

export const useEvents = () => useFirestoreCollectionDocs('events');
export const useEvent = (id) => useFirestoreDocument('events', id);
export const useSaveEvent = (id) => {
  const doc = useCollection('events').doc(id);
  return (data) => doc.update(data);
};
