import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient();

  // const lectureID = req.body.lectureID;
  // const studentID = req.body.studentID,

  if (req.method === "POST") {
    const updateAttendance = await prisma.studentOnLecture.update({
      where: {
        studentID_lectureID: {
          lectureID: req.body.lectureID,
          studentID: req.body.studentID,
        },
      },
      data: {
        attended: true,
      },
    });

    res.status(200).json(updateAttendance);

    // Process a POST request
  } else {
    // Handle any other HTTP method
    // const error = await prisma.classroom.findFirst();
    // console.log(error);
    // res.status(200).json(error);
  }
};
