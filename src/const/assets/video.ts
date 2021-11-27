import StudentReviewVideo1 from '@/assets/video/student_review_1.mp4';
import StudentReviewVideo2 from '@/assets/video/student_review_2.mp4';
import StudentReviewVideo3 from '@/assets/video/student_review_3.mp4';
import StudentReviewVideo4 from '@/assets/video/student_review_4.mp4';

export type VideoItem = {
  src: string
}

const VIDEO_DICT: {
  [key: string]: VideoItem[]
} = {
  student_reviews: [
    {
      src: StudentReviewVideo1,
    },
    {
      src: StudentReviewVideo2,
    },
    {
      src: StudentReviewVideo3,
    },
    {
      src: StudentReviewVideo4,
    },
  ],
};

export default VIDEO_DICT;
