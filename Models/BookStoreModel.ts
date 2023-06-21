// import mongoose from "mongoose";

// interface Books {
//     title: string;
//     description: string;
//     author: string;
//     views: number[];
//     coverImage: string;
//     category: string;
// }

// interface iBooks extends Books, 
// mongoose.Document{}

// const BookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         unique: true
//     },
//     description: {
//         type: String
//     },
//     author: {
//         type: String
//     },
//     views: {
//         type: []
//     },
//     coverImage: {
//         type: String
//     },
//     category: {
//         type: String
//     },
// },{timestamps: true}
// )

// const BooksModels  = mongoose.model<iBooks>("Books", BookSchema )

// export default BooksModels;

// import mongoose from "mongoose"
// interface Books {
//     title: string;
//     description: string;
//     author: string;
//     views: [];
//     coverImage: string;
//     category: string;
// }
// interface iBooks extends Books,
// mongoose.Document{}
// const BookSchema = new mongoose.Schema({
//     title: {
//         type: String,
        
//     },
//     author: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     category: {
//         type: String
//     },
//     views: {
//         type: []
//     },
//     coverImage: {
//         type: string
//     },
// }, {timestamps: true})

// const BooksModels = mongoose.model<iBooks>("Books", BookSchema)
// export default BooksModels

// import mongoose from "mongoose"
// interface Books {
//     title: string;
//     author: string;
//     description: string;
//     category: string;
//     views: [];
//     coverImage: string;
// } 
// interface iBooks extends Books,
// mongoose.Document{}
// const BookSchema = new mongoose.Schema({
//     title:{
//         type: String
//     },
//     author:{
//         type: String
//     },
//     description:{
//         type: String
//     },
//     category:{
//         type: String
//     },
//     views:{
//         type: []
//     },
//     coverImage:{
//         type: String
//     },
// }, {timestamps: true})
// const BooksModel =mongoose.model<iBooks>("Books", BookSchema)
// export default BooksModel

// import mongoose from "mongoose"
// interface Books {
//     title: string;
//     author: string;
//     description: string;
//     category: string;
//     views: [];
//     coverImage: string
// }
// interface iBooks extends Books,
// mongoose.Document{}
// const BookSchema = new mongoose.Schema({
//     title: {
//         type: String
//     },
//     author: {
//         type: String
//     },
//     category: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     coverImage: {
//         type: String
//     },
//     views: {
//         type: []
//     },
// }, {timestamps : true})
// const BooksModel = mongoose.model<iBooks>("Books", BookSchema)
// export default BooksModel

// import mongoose from "mongoose"
// interface Books {
//     title: string;
//     author: string;
//     description: string;
//     category: string;
//     coverImage: string;
//     views: []
// }
// interface IBooks extends Books, mongoose.Document{}
// const BookSchema = new mongoose.Schema({
//     title: {
//         type: String
//     },
//     author: {
//         type: String
//     },
//     category: {
//         type: String
//     },
//     coverImage: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     views: {
//         type: []
//     },
// }, {timestamps: true})
// const BookModels = mongoose.model<IBooks>("Books", BookSchema)
// export default BookModels

// import mongoose from "mongoose"
// interface Books {
//     title: string;
//     author: string;
//     category: string;
//     description: string;
//     coverImage: string;
//     views: [];
// }
// interface iBooks extends Books, mongoose.Document{}
// const BookSchema = new mongoose.Schema({
//     title: {
//         type: String
//     },
//     category: {
//         type: String
//     },
//     author: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     coverImage: {
//         type: String
//     },
//     views: {
//         type: []
//     },
// }, {timestamps: true})
// const BookModels =  mongoose.model<iBooks>("Books", BookSchema)
// export default BookModels

// import mongoose from "mongoose"
// import Books from "../Utils/interface";

// interface iBooks extends Books, mongoose.Document{}
// const BookSchema = new mongoose.Schema({
//     title: {
//         type: String
//     },
//     category: {
//         type: String
//     },
//     coverImage: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     author: {
//         type: String
//     },
//     views: {
//         type: []
//     },
// }, {timestamps: true})
// const BookModels = mongoose.model<iBooks>("Books", BookSchema)
// export default BookModels

// import mongoose from "mongoose"
// import Books from "../Utils/interface";
// interface iBooks extends Books, mongoose.Document{}
// const BookSchema = new mongoose.Schema({
//     title: {
//         type: String
//     },
//     author: {
//         type: String
//     },
//     category: {
//         type: String
//     },
//     coverImage: {
//         type: String
//     },
//     views: {
//         type: []
//     },
// }, {timestamps: true})
// const BookModels = mongoose.model<iBooks>("Books", BookSchema)
// export default BookModels

// import mongoose from "mongoose"
// import Books from "../Utils/interface";

// interface iBooks extends Books, mongoose.Document{}
// const BookSchema = new mongoose.Schema({
//     type: {
//         type: String
//     },
//     description: {
//         type: String
//     },
//     author: {
//         type: String
//     },
//     coverImage: {
//         type: String
//     },
//     views: {
//         type: []
//     },
// }, {timestamps: true})
// const BookStoreModel = mongoose.model<iBooks>("Books", BookSchema)
// export default BookStoreModel

import mongoose from "mongoose"
import Books from "../Utils/interface";

interface iBooks extends Books, mongoose.Document{}
const BookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    category: {
        type: String
    },
    coverImage: {
        type: String
    },
    description: {
        type: String
    },
    views: {
        type: []
    },
}, {timestamps: true})
const BookModels = mongoose.model<iBooks>("Books", BookSchema)
export default BookModels