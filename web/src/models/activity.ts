export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy: string;
  updatedBy: string;
}
