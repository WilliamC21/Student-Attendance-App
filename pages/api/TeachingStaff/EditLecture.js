import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const updateLecture = await prisma.lecture.update({
      where: {
        id: req.body.lectureID,
      },
      data: {
        lectureCode: req.body.lectureCode,
        hasStarted: true,
      },
    });

    res.status(200).json(updateLecture);

    // Process a POST request
  } else {
    // Handle any other HTTP method
    const error = await prisma.classroom.findFirst();

    console.log(error);
    res.status(200).json(error);
  }
};
