import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const course = await prisma.course.create({ data: req.body });

    res.status(200).json(test);

    // Process a POST request
  } else {
    // const blah = await prisma.course.findFirst();
    // console.log(blah);
    // res.status(200).json(blah);
    // Handle any other HTTP method
  }
};
