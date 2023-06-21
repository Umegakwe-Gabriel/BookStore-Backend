import express, { Request, Response } from "express";

import BookModels from "../Models/BookStoreModel";

//Search for a book

//Upload books:
// export const UploadBooks = async(req: Request, res: Response)=>{
//     try {
//         const {title, description, author,  category} = req.body;
//         const NewBooks = await BookModels.create({
//             title,
//             author,
//             coverImage: title.charAt(0).toUpperCase(),
//             description,
//             views:[],
//             category
//         })
//         return res.status(201).json({message: "Books successfully uploaded", data: NewBooks})
//     } catch (error) {
//         return res.status(400).json({message: "Unable to update book", data: error})
//         }
// }
// export const uploadBooks = async (req: Request, res: Response) => {
//   try {
//     const { title, category, author } = req.body;
//     const NewBook = await BookModels.create({
//       title,
//       author,
//       description: title.charAt(0).toUpperCase(),
//       views: [],
//       category,
//     });
//     return res
//       .status(201)
//       .json({ message: "Books successfully uploaded", data: NewBook });
//   } catch (error) {
//     return res
//     .status(400)
//     .json({ message: "Couldn't get the book", data: error });
//   }
// };
// export const uploadBooks = async (req: Request, res: Response) => {
//   try {
//     const { title, author, category } = req.body;
//     const NewBook = await BookModels.create({
//       title,
//       description: title.charAt(0).toUpperCase(),
//       views: [],
//       author,
//       category,
//     })
//     return res.status(201).json({message: "Book successfully uploaded", data: NewBook})
//   } catch (error) {
//     return res.status(400).json({message: "Couldn't get this book", data: error})
//   }
// };
// export const uploadBooks = async (req: Request, res: Response)=>{
//     try {
//         const {title, category, author}= req.body;
//         const NewBook = await BookModels.create({
//             title,
//             description: title.charAt(0).toUpperCase(),
//             category,
//             views: [],
//             author
//         })
//         return res.status(201).json({message: "Book succesfully uploaded", data: NewBook})
//     } catch (error) {
//         return res.status(400).json({message: "Couldn't get this book", data: error})
//     }
// }
export const uploadBooks = async(req: Request, res: Response)=>{
try {
    const {title, category, author, coverImage} = req.body;
const NewBook = await BookModels.create({
    title,
    category,
    author,
    description: title.charAt(0).toUpperCase(),
    coverImage,
    views: []
})
return res.status(201).json({message: "Book successfully uploaded", data: NewBook})
} catch (error) {
    return res.status(400).json({message: "Couldn't get this book", data: error})
}}

//View one book:
// export const ViewSingleBook = async (req: Request, res: Response) => {
//   try {
//     const { bookID } = req.params;
//     const GetOneBook = await BookModels.findById(bookID);
//     //const singlebook = await BookModels.findById(req.params.bookID)
//     return res
//       .status(200)
//       .json({ message: "Successfully gotten this book", data: GetOneBook });
//   } catch (error) {
//     return res
//       .status(404)
//       .json({ message: "Couldn't get this book", data: error });
//   }
// };
// export const viewSingleBook = async(req: Request, res: Response)=>{
//     try {
//         const {ID} = req.params;
//         const GetOneBook = await BookModels.findById(ID);
//         //const singleBook = await BookModels.findById(req.params.ID)
//         return res.status(201).json({message: "Successfully gotten this book", data: GetOneBook})
//     } catch (error) {
//         return res.status(404).json({message: "Couldn't get this book", data: error})
//     }
// }
// export const viewSingleBook = async(req: Request, res: Response)=>{
//     try {
//         const {ID} = req.params;
//         const GetOneBook = await BookModels.findById(ID)
//         //const singleBook = await BookModels.findById(req.params.ID)
//         return res.status(201).json({message: "Successfully gotten this book", data: GetOneBook})
//     } catch (error) {
//         return res.status(404).json({message: "Couldn't get this book", data: error})
//     }
// }
// export const viewSingleBook = async(req: Request, res: Response)=>{
//     try {
//         const {ID} = req.params;
//         const GetOneBook = await BookModels.findById(ID)
//         //const singleBook = await BookModels.findById(req.params.ID)
//         return res.status(201).json({message: "Successfully gotten this book", data: GetOneBook})
//     } catch (error) {
//         return res.status(404).json({message: "Couldn't get this book", data: error})
//     }
// }
export const viewSingleBook = async(req: Request, res: Response)=>{
    try {
        const {ID} = req.params;
        const GetOneBook = await BookModels.findById(ID)
        //const singleBook = await BookModels.fidById(req.params.ID)
        return res.status(201).json({message: "Successfully gotten this", data: GetOneBook})
    } catch (error) {
        return res.status(404).json({message: "Couldn't get this book", data: error})
    }
}

//Delete a book

//Get/view all book
// export const AllBooks = async (req: Request, res: Response) => {
//   try {
//     const AllBooks = await BookModels.find().sort({ createdAt: -1 });
//     res
//       .status(200)
//       .json({ message: "These are all our boooks", data: AllBooks });
//   } catch (error) {
//     res.status(400).json({ message: "Couldn't process books", data: error });
//   }
// };
// export const AllBooks = async (req: Request, res: Response)=>{
//     try {
//         const Books = await BookModels.find().sort({createdAt: -1})
//         res.status(200).json({message: "These are all our books", data: Books})
//     } catch (error) {
//         res.status(400).json({message: "Couldn't process books", data: error})
//     }
// }
export const AllBooks= async(req: Request, res: Response)=>{
    try {
        const Books = await BookModels.find().sort({createdAt: -1})
        res.status(200).json({message: "These are all our books", data: Books})
     } catch (error) {
        res.status(400).json({message: "Couldn't get all our books", data: error})
    }
}

//Update a book

//Get the views on each book
