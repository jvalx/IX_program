import {
    setDoc,
    doc,
    getDoc
  } from "firebase/firestore";
  import { firestore } from '../firebase/firebase';
  import { Profile } from "../models/profile";
  
  class ProfileService {
  
    constructor() {
      this.collection = 'profiles';
    }
  
    async saveProfile(profile) {
      const docRef = doc(firestore, this.collection, profile.id);
      console.log(profile);
      await setDoc(docRef, profile.toJson());
      return profile;
    }
  
    async readProfile(user) {
      const docRef = doc(firestore, this.collection, user.uid);
  
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        return Profile.fromFirebase(docSnapshot);
      }
      return null;
    }
  
  }
  
  const service = new ProfileService();
  
  export default service;