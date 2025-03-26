import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    minLength: [2, 'First name must be at least 2 characters'],
    maxLength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    minLength: [2, 'Last name must be at least 2 characters'],
    maxLength: [50, 'Last name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  age: {
    type: Number,
    min: [0, 'Age cannot be negative'],
    max: [120, 'Age cannot exceed 120']
  },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

// Sample Users
const sampleUsers = [
  { id: 1, firstName: "Alice", lastName: "Johnson", email: "alice@example.com", age: 30 },
  { id: 2, firstName: "Bob", lastName: "Smith", email: "bob@example.com", age: 25 },
  { id: 3, firstName: "Charlie", lastName: "Brown", email: "charlie@example.com", age: 35 },
  { id: 4, firstName: "David", lastName: "White", email: "david@example.com", age: 40 },
  { id: 5, firstName: "Eve", lastName: "Black", email: "eve@example.com", age: 28 }
];

export default sampleUsers;
