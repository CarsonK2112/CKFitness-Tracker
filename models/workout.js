const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now ()
  },
  exercises: [
    {
      type: {
        type:String, 
        required:"type is required"
      },
      name: {
        type:String, 
        required:"name is required"
      },
      duration: {
        type:Number, 
        required:"duration is required"
      },
      distance: {type:Number},
      weight: {type:Number},
      reps: {type:Number},
      sets: {type:Number}
    }
  ],
  
}
// {
//   toJSON: {
//     // include any virtual properties when data is requested
//     virtuals: true
//   }
// }
);

workoutSchema.virtual("totalDuration").get(
  ()=> {
    return this.exercises.reduce((total, exercise)=> {
      return total+exercise.duration
    }, 0)
  }
)


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

