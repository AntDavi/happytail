export type Gender = "male" | "female";

export interface FirestorePetData {
  id: string;
  name: string;
  image: string;
  gender: Gender;
  breed: string;
  size: string;
  age: string;
  temperament: string;
}
