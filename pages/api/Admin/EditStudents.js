import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    // Process a POST request
    const student = await prisma.student.create({ data: req.body });

    res.status(200).json(student);
  } else {
    // //if post
    // const error = await prisma.student.findFirst();
    // console.log(error);
    // res.status(200).json(error);
    // // Handle any other HTTP method
  }
};
