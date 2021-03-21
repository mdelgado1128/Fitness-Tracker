const Workout = require("../models/workout");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
Workout.find({}).then(dbWorkout => {
  res.json(dbWorkout);
})
.catch (err => {
  res.statusCode(400).json(err);
  });
})
router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id
  Workout.updateOne({
    _id:id
  }, {$push:{exercises:req.body}}).then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch (err => {
    res.statusCode(400).json(err);
    });

})
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch (err => {
  res.statusCode(400).json(err);
  });
});


module.exports = router;