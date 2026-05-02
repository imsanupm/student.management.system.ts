import { Schema, model, Document } from 'mongoose';

// 1. Define an Interface representing a document in MongoDB
export interface IStudent extends Document {
  studentName: string;
  studentIdNo: string;
  age: number;
  password: string;
  createdAt: Date;
}

// 2. Create the Schema corresponding to the interface
const studentSchema = new Schema<IStudent>({
  studentName: { 
    type: String, 
    required: [true, 'Student name is required'],
    trim: true 
  },
  studentIdNo: { 
    type: String, 
    required: [true, 'ID number is required'],
    unique: true, // Prevents duplicate IDs
    trim: true 
  },
  age: { 
    type: Number, 
    required: [true, 'Age is required'],
    min: [5, 'Age must be at least 5'] 
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// 3. Export the Model
export const Student = model<IStudent>('Student', studentSchema);