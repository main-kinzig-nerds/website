import { useFirestoreCollectionDocs, useFirestoreDocument } from './utils';

export const useLocations = () => useFirestoreCollectionDocs('locations');
export const useLocation = (id) => useFirestoreDocument('locations', id);
