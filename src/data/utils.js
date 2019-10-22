import { useFirebaseApp, useFirestoreCollection, useFirestoreDoc } from 'reactfire';

export function fromFirestoreDoc(doc) {
  return { ...doc.data(), id: doc.id };
}

export function useCollection(name) {
  const firebaseApp = useFirebaseApp();
  return firebaseApp.firestore().collection(name);
}

export function useFirestoreCollectionDocs(name) {
  const collection = useFirestoreCollection(useCollection(name));
  return collection.docs.map(fromFirestoreDoc);
}

export function useFirestoreDocument(collection, id) {
  const doc = useFirestoreDoc(useCollection(collection).doc(id));
  return fromFirestoreDoc(doc);
}
