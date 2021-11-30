import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const classroom = await prisma.classroom.create({
      data: {
        roomNum: "test",
        building: "test",
      },
    });

    res.status(200).json(classroom);

    // Process a POST request
  } else {
    // Handle any other HTTP method
    const error = await prisma.classroom.findFirst();

    console.log(error);
    res.status(200).json(error);
  }
};
