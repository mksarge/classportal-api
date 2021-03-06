import * as mongoose from 'mongoose';

interface ICourseDocument extends mongoose.Document {
  courseId: string;
  minTeamSize: number;
  maxTeamSize: number;
  modules: string[];
  customData: any;
}

interface ICourseModel extends mongoose.Model<ICourseDocument> {
}

const CourseSchema: mongoose.Schema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
    unique: true,
  },
  minTeamSize: {
    type: Number,
  },
  maxTeamSize: {
    type: Number,
  },
  modules: {
    type: [String],
  },
  customData: {
    type: Object,
  },
});

const Course: ICourseModel = <ICourseModel>mongoose.model('Course', CourseSchema);

export { ICourseDocument, ICourseModel, Course };
