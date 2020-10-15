const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(allWorkouts => {
        res.json(allWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(testrecord => {
      res.json(testrecord)
    })
    .catch(err => {
      res.status(400).json(err);
    })
  })

router.put("/api/workouts/:id", (req, res) => {
  console.log("testing", typeof req.body, req.body)
  // updating workout
  Workout.findByIdAndUpdate({ _id: req.params.id }, { $push:{exercises: req.body} }, { new: true, runValidators: true })
  .then(updatedworkout => {
    console.log("updatedworkout", updatedworkout)
    res.json(updatedworkout)
  })
  .catch(err => {
    console.log(err)
    res.status(400).json(err);
  })
})


module.exports = router;