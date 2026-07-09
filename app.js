import express from "express";
import accountRouter from "./routes/account.js"
import cartRouter from "./routes/cart.js"
import ordersRouter from "./routes/orders.js"
import producsRouter from "./routes/producs.js"

const PORT = process.env.PORT
const DB_BASE_PATH = process.env.DB_BASE_PATH


const app = express()

app.use(express.json())
app.use("/account", accountRouter)
app.use("/cart", cartRouter)
app.use("/orders", ordersRouter)
app.use("/products", producsRouter)


app.get("/", (req, res) => {

})

app.listen(PORT || 3000, () => {
    console.log("servsr running...");    
})