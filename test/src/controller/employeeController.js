const express = require('express');
const { EmployeeModel } = require("../model/employee.model");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const employee = await EmployeeModel.create(req.body);

        res.status(200).json({
            success: true,
            employee: employee
        })
    } catch (error) {
        return res.status(500).json({ message: error.message, status: 'Failed' });
    }
});

router.get("/", async (req, res) => {
    try {
        const employee = await EmployeeModel.find({});

        res.status(201).json({
            success: true,
            employee: employee,
        })
    } catch (error) {
        return res.status(500).json({ message: error.message, status: 'Failed' });
    }
});

// router.get("/", async (req, res) => {
//     try {
//         const employee = await EmployeeModel.findById();

//         res.status(200).json({
//             success: true,
//             employee
//         })
//     } catch (error) {
//         return res.status().json({ message: error.message, status: 'Failed' });
//     }
// });


// router.get("/", async (req, res) => {
//     try {
//         const employee = await EmployeeModel.findById(req.params.id);

//         res.status(200).json({
//             success: true,
//             employee
//         })
//     } catch (error) {
//         return res.status().json({ message: error.message, status: 'Failed' });
//     }
// });

router.get("/:id", async (req, res) => {
    try {
        const employee = await EmployeeModel.findById(req.params.id);

        res.status(200).json({
            success: true,
            employee
        })
    } catch (error) {
        return res.status().json({ message: error.message, status: 'Failed' });
    }
});

module.exports = router;
