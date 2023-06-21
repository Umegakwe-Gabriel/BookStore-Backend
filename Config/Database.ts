// import mongoose from "mongoose";

// const DB_URL = "mongodb://0.0.0.0:27017/Set07BookStore"

// mongoose.connect(DB_URL)

// mongoose.connection
// .on("open", ()=>{
//     console.log("");
//     console.log("Database is connecteed");    
// })
// .once("error", ()=>{
//     console.log("an error occured in connecting to database");    
// })

// export default mongoose;

// import mongoose from "mongoose"

// const DB_URL = "mongodb://0.0.0.0:27017/Set07BookStore"

// mongoose.connect(DB_URL)

// mongoose.connection
// .on("open", ()=>{
//     console.log("");
//     console.log("Database is connected");    
// })
// .once("error", ()=>{
//     console.log("An error occured from connecting to database");    
// })
// export default mongoose;

// import mongoose from "mongoose"
// const DB_URL = "mongodb://0.0.0.0:27017/Set07BookStore"

// mongoose.connect(DB_URL)

// mongoose.connection
// .on("open", ()=>{
//     console.log("");
//     console.log("Database is connected");        
// })
// .once("error", ()=>{
//     console.log("An error occured while connecting to database");    
// })

// export default mongoose

// import mongoose from "mongoose"
// const Set07BS = "mongodb://0.0.0.0:27017/Set07BookStore"

// mongoose.connect(Set07BS)

// mongoose.connection
// .on("open", ()=>{
//     console.log("");
//     console.log("Database is connected");    
// })
// .once("error", ()=>{
//     console.log("An error occured while connecting to database");
// })

// export default mongoose;

// import mongoose from "mongoose"
// const Set07BS = "mongodb://0.0.0.0:27017/Set07BookStore"
// mongoose.connect(Set07BS)

// mongoose.connection
// .on("open", ()=>{
//     console.log("Database is connected");    
// })
// .once("error", ()=>{
//     console.log("An error occured while connecting to database");    
// })

// export default mongoose;

// import mongoose from "mongoose"
// const Set07BS = "mongodb://0.0.0.0/Set07BookStore"
// mongoose.connect(Set07BS)
// mongoose.connection
// .on("open", ()=>{
//     console.log("Database is connected");    
// })
// .once("error", ()=>{
//     console.log("Anerror ocurred while connecting to database");    
// })

// export default mongoose;

// import mongoose from "mongoose";

// const Set07BS = "mongodb://0.0.0.0/Set07BookStore"
// mongoose.connect(Set07BS)
// mongoose.connection
// .on("open", ()=>{
//     console.log("Database is connected");    
// })
// .once("error", ()=>{
//     console.log("An error occured while connecting to database");
// })

// export default mongoose;

import mongoose from "mongoose"

const Set07DB = "mongodb://0.0.0.0:27017/Set07BookStore"
mongoose.connect(Set07DB)

mongoose.connection
.on("open", ()=>{
    console.log("Database is connected");    
})
.once("error", ()=>{
    console.log("An erro occured while connecting to database");
})
export default mongoose;