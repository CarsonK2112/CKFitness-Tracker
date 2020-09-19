const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workout", (req, res) => {
    Workout.find({})
      .then(allWorkouts => {
        res.json(allWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;