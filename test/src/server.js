const app = require('./index');
const { connect } = require("./configs/db")

app.listen(2015, async () => {
    try {
        await connect;
        console.log("Connected to Database");
    } catch (error) {
        console.error(error)
    } console.log('Server is running on Port 2015')
})